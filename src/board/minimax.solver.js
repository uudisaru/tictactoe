import { GameStatus, TurnType, INITIAL_BOARD } from "./constants";
import { allowedMoves, boardStatus, copyBoard, move } from "./board";
import { zeros } from "mathjs";

const MINIMUM = -1000;
const MAXIMUM = 1000;

function getScore(status) {
  if (status === GameStatus.Lose) {
    return MAXIMUM;
  }

  if (status !== GameStatus.InProgress) {
    return MINIMUM;
  }

  return 0;
}

/**
 * Tic-tac-toe implementation using minimax algorithm
 * For detailed explanation @see https://github.com/GeorgeSeif/Tic-Tac-Toe-AI
 */
export function minimax(board, turn, depth, alpha, beta) {
  let bestMove = [-1, -1];
  let bestScore = turn === TurnType.Ai ? MINIMUM : MAXIMUM;

  const status = boardStatus(board).status;
  if (status !== GameStatus.InProgress) {
    bestScore = getScore(status);
    return [bestScore, bestMove];
  }

  const allowed = allowedMoves(board);
  if (depth === 0 && allowed.length === 1) {
    // Last move
    return [0, allowed[0]];
  }
  for (let i = 0; i < allowed.length; i++) {
    const [row, col] = allowed[i];
    board[row][col] = turn;

    const score = minimax(
      board,
      turn === TurnType.Ai ? TurnType.Player : TurnType.Ai,
      depth + 1,
      alpha,
      beta
    )[0];

    if (turn === TurnType.Ai) {
      // Maximizing player's turn
      if (bestScore < score) {
        bestScore = score - depth * 10;
        bestMove = [row, col];

        // Check if this branch's best move is worse than the best
        // option of a previously search branch. If it is, skip it
        alpha = Math.max(alpha, bestScore);
        board[row][col] = 0;
        if (beta <= alpha) {
          break;
        }
      }
    } else {
      // Minimizing opponent's turn
      if (bestScore > score) {
        bestScore = score + depth * 10;
        bestMove = [row, col];

        // Check if this branch's best move is worse than the best
        // option of a previously search branch. If it is, skip it
        beta = Math.min(beta, bestScore);
        board[row][col] = 0;
        if (beta <= alpha) {
          break;
        }
      }
    }
    board[row][col] = 0;
  }
  return [bestScore, bestMove];
}

var globalBoard = null;

export async function mmCreateBoard(mine, id) {
  let board;
  if (mine) {
    board = INITIAL_BOARD;
  } else {
    board = {
      board: zeros(3, 3).toArray(),
      turn: TurnType.Player,
    };

    board.board[1][1] = TurnType.Ai;
    board.id = id;
  }

  board.status = GameStatus.InProgress;
  board.id = 1;
  globalBoard = board.board;
  return Promise.resolve(board);
}

export async function mmTakeTurn(gameId, row, col) {
  globalBoard = move(globalBoard, row, col, TurnType.Player).newBoard;
  let status = boardStatus(globalBoard);
  if (status.status === GameStatus.InProgress) {
    const aiMove = minimax(
      copyBoard(globalBoard),
      TurnType.Ai,
      0,
      MINIMUM,
      MAXIMUM
    );

    globalBoard = move(globalBoard, aiMove[1][0], aiMove[1][1], TurnType.Ai)
      .newBoard;
    status = boardStatus(globalBoard);
  }

  return Promise.resolve({
    board: globalBoard,
    id: gameId,
    status: status.status,
    turn: TurnType.Player,
  });
}

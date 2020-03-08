import { diag, transpose } from "mathjs";
import { CellState, GameStatus, SolutionType } from "./constants";

function getRowStatus(rows, type) {
  const status = {
    status: GameStatus.Tie,
  };
  for (const [index, row] of rows.entries()) {
    const markers = new Set(row);
    const hasEmpty = markers.has(CellState.Empty);
    if (hasEmpty) {
      status.status = GameStatus.InProgress;
    } else {
      if (markers.size === 1) {
        let unique = markers.values().next().value;
        const result = {
          index,
          type,
        };
        result.status =
          unique === CellState.Circle ? GameStatus.Win : GameStatus.Lose;

        return result;
      }
    }
  }

  return status;
}

/**
 * Get allowed moves
 * 
 * @param {number[][]} board
 * @returns {number[][]} Array of allowed moves (x, y)
 */
export function allowedMoves(board) {
  const allowed = [];
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === CellState.Empty) {
        allowed.push([i, j]);
      }
    });
  });

  return allowed;
}


/**
 * Calculate the status of the board
 * @param {number[][]} board
 * @returns {Object} Status and in case of win / loss also a solution (index and type)
 */
export function boardStatus(board) {
  const rowStatus = getRowStatus(board, SolutionType.Row);
  if (GameStatus.isFinished(rowStatus.status)) {
    return rowStatus;
  }
  const columns = transpose(board);
  let status = getRowStatus(columns, SolutionType.Column);
  if (GameStatus.isFinished(status.status)) {
    return status;
  }
  const diags = [diag(board), [board[0][2], board[1][1], board[2][0]]];
  status = getRowStatus(diags, SolutionType.Diagonal);
  if (GameStatus.isFinished(status.status)) {
    return status;
  }

  // Tie or in progress
  return rowStatus;
}

/**
 * @param {number[][]} board
 * @returns {number[][]} Deep copy of the board
 */
export function copyBoard(board) {
  return board.map(row => [...row]);
}

/**
 * Calculate the new state of the board after specified move; does not validate the move
 * @param {number[][]} board
 * @returns {number[][]} New board
 */
export function move(board, row, col, turn) {
  const newBoard = [...board];
  newBoard[row] = [...newBoard[row]];
  newBoard[row].splice(col, 1, turn);

  return { newBoard };
}

import React, { useState } from "react";
import "./App.css";
import TicTacToe from "./TicTacToe";
import { CIRCLE, CROSS, EMPTY } from "./Cell";
import GameStatus from "./GameStatus";

const STATUS_IN_PROGRESS = "in-progress";
const STATUS_LOSE = "lose";
const STATUS_TIE = "tie";
const STATUS_WIN = "win";
const INITIAL_BOARD = {
  board: [
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY]
  ],
  result: null,
  status: STATUS_IN_PROGRESS,
  turn: CROSS
};

function calculateStatus(board) {
  // winning solution: row, col or diagonal filled
  let status = { status: STATUS_IN_PROGRESS, result: null };

  // rows & columns
  for (let i = 0; i < 3; i++) {
    // rows
    if (board[i][0] !== EMPTY && board[i].every(cell => cell === board[i][0])) {
      status.status = board[i][0] === CIRCLE ? STATUS_WIN : STATUS_LOSE;
      console.debug("Row", board[i][0] === CIRCLE, board[i][0], status);
      status.result = { type: "row", index: i };
      break;
    }
    // columns
    if (
      board[0][i] !== EMPTY &&
      [board[1][i], board[2][i]].every(cell => cell === board[0][i])
    ) {
      status.status = board[0][i] === CIRCLE ? STATUS_WIN : STATUS_LOSE;
      status.result = { type: "col", index: i };
      break;
    }
  }

  // diagonals
  if (status.status === STATUS_IN_PROGRESS) {
    if (board[1][1] !== EMPTY) {
      if (board[1][1] === board[0][0] && board[1][1] === board[2][2]) {
        status.result = { type: "diag", index: 0 };
      } else if (board[1][1] === board[0][2] && board[1][1] === board[2][0]) {
        status.result = { type: "diag", index: 2 };
      }
      if (!!status.result) {
        status.status = board[1][1] === CIRCLE ? STATUS_WIN : STATUS_LOSE;
      }
    }
  }

  if (status.status === STATUS_IN_PROGRESS) {
    if (board.every(row => row.every(cell => cell !== EMPTY))) {
      status.status = STATUS_TIE;
    }
  }

  return status;
}

function move(board, row, col, turn) {
  const newBoard = [...board];
  newBoard[row] = [...newBoard[row]];
  newBoard[row].splice(col, 1, turn);

  const status = calculateStatus(newBoard);

  return { ...status, newBoard };
}

function App() {
  const [state, setState] = useState(INITIAL_BOARD);
  return (
    <div className="App">
      <TicTacToe
        board={state.board}
        move={(row, col) => {
          const { newBoard, result, status } = move(
            state.board,
            row,
            col,
            state.turn
          );
          setState({
            board: newBoard,
            status: status,
            result,
            turn: state.turn === CIRCLE ? CROSS : CIRCLE
          });
        }}
        result={state.result}
      />
      {state.status !== STATUS_IN_PROGRESS && (
        <GameStatus
          reset={() => setState(INITIAL_BOARD)}
          status={state.status}
        />
      )}
    </div>
  );
}

export default App;

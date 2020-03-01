import React, { useState } from "react";
import "./App.css";
import TicTacToe from "./board/TicTacToe";
import Controls from "./controls/Controls";
import { BoardStatus, CellState, INITIAL_BOARD, Turn } from "./board/constants";

function calculateStatus(board) {
  // winning solution: row, col or diagonal filled
  let status = { status: BoardStatus.InProgress, result: null };

  // rows & columns
  for (let i = 0; i < 3; i++) {
    // rows
    if (
      board[i][0] !== CellState.Empty &&
      board[i].every(cell => cell === board[i][0])
    ) {
      status.status =
        board[i][0] === CellState.Circle ? BoardStatus.Win : BoardStatus.Lose;
      status.result = { type: "row", index: i };
      break;
    }
    // columns
    if (
      board[0][i] !== CellState.Empty &&
      [board[1][i], board[2][i]].every(cell => cell === board[0][i])
    ) {
      status.status =
        board[0][i] === CellState.Circle ? BoardStatus.Win : BoardStatus.Lose;
      status.result = { type: "col", index: i };
      break;
    }
  }

  // diagonals
  if (status.status === BoardStatus.InProgress) {
    if (board[1][1] !== CellState.Empty) {
      if (board[1][1] === board[0][0] && board[1][1] === board[2][2]) {
        status.result = { type: "diag", index: 0 };
      } else if (board[1][1] === board[0][2] && board[1][1] === board[2][0]) {
        status.result = { type: "diag", index: 2 };
      }
      if (!!status.result) {
        status.status =
          board[1][1] === CellState.Circle ? BoardStatus.Win : BoardStatus.Lose;
      }
    }
  }

  if (status.status === BoardStatus.InProgress) {
    if (board.every(row => row.every(cell => cell !== CellState.Empty))) {
      status.status = BoardStatus.Tie;
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
      <Controls
        play={mine =>
          setState({
            ...INITIAL_BOARD,
            status: BoardStatus.InProgress,
            turn: mine ? Turn.Circle : Turn.Cross
          })
        }
        status={state.status}
      />
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
            turn:
              state.turn === CellState.Circle
                ? CellState.Cross
                : CellState.Circle
          });
        }}
        result={state.result}
      />
    </div>
  );
}

export default App;

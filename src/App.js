import React, { useState } from "react";
import "./App.css";
import TicTacToe from "./board/TicTacToe";
import Controls from "./controls/Controls";
import { BoardStatus, CellState, INITIAL_BOARD, Turn } from "./board/constants";
import { createBoard, takeTurn } from "./services";

function calcStrikethrough(board) {
  // winning solution: row, col or diagonal filled
  let strikethrough = null;

  // rows & columns
  for (let i = 0; i < 3; i++) {
    // rows
    if (
      board[i][0] !== CellState.Empty &&
      board[i].every(cell => cell === board[i][0])
    ) {
      strikethrough = { type: "row", index: i };
      break;
    }
    // columns
    if (
      board[0][i] !== CellState.Empty &&
      [board[1][i], board[2][i]].every(cell => cell === board[0][i])
    ) {
      strikethrough = { type: "col", index: i };
      break;
    }
  }

  // diagonals
  if (!strikethrough) {
    if (board[1][1] !== CellState.Empty) {
      if (board[1][1] === board[0][0] && board[1][1] === board[2][2]) {
        strikethrough = { type: "diag", index: 0 };
      } else if (board[1][1] === board[0][2] && board[1][1] === board[2][0]) {
        strikethrough = { type: "diag", index: 2 };
      }
    }
  }

  return strikethrough;
}

function move(board, row, col, turn) {
  const newBoard = [...board];
  newBoard[row] = [...newBoard[row]];
  newBoard[row].splice(col, 1, turn);

  return { newBoard };
}

function App() {
  const [state, setState] = useState(INITIAL_BOARD);
  const [interaction, setInteraction] = useState({
    loading: false,
    waiting: true,
  });

  return (
    <div className="App">
      <Controls
        play={async mine => {
          setInteraction({ waiting: false, loading: true });
          const data = await createBoard(mine);
          setState({
            ...data,
            // If server's turn, the first move is done by calling the create board
            turn: Turn.Circle
          });
          setInteraction({ waiting: false, loading: false });
        }}
        status={state.status}
      />
      <TicTacToe
        board={state.board}
        interaction={interaction}
        move={async (row, col) => {
          if (
            state.turn !== Turn.Circle ||
            state.status !== BoardStatus.InProgress
          ) {
            // Do nothing while waiting for server turn
            return;
          }
          const { newBoard } = move(state.board, row, col, state.turn);
          setInteraction({ waiting: false, loading: true });
          setState({ ...state, board: newBoard, turn: CellState.Cross });

          const res = await takeTurn(state.id, row, col);
          let strikethrough = null;
          if (BoardStatus.isFinished(res.status)) {
            strikethrough = calcStrikethrough(res.board);
          }
          setState({
            ...res,
            result: strikethrough,
            turn: CellState.Circle
          });
          if (res.status === BoardStatus.InProgress) {
            setInteraction({ waiting: false, loading: false });
          } else {
            setInteraction({ waiting: true, loading: false });
          }
        }}
        result={state.result}
      />
    </div>
  );
}

export default App;

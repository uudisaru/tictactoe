import React, { useState } from "react";
import "./App.css";
import TicTacToe from "./controls/TicTacToe";
import Controls from "./controls/Controls";
import { CellState, GameStatus, INITIAL_BOARD, TurnType } from "./board/constants";
import { createBoard, takeTurn } from "./services";
import {move, boardStatus} from "./board/board";

function App() {
  const [state, setState] = useState(INITIAL_BOARD);
  const [interaction, setInteraction] = useState({
    loading: false,
    waiting: true,
  });

  return (
    <div className="App">
      <Controls
        play={async (mine) => {
          setInteraction({ waiting: false, loading: true });
          const data = await createBoard(mine);
          setState({
            ...data,
            // If server's turn, the first move is done by calling the create board
            turn: TurnType.PlayerMarker,
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
            state.turn !== TurnType.PlayerMarker ||
            state.status !== GameStatus.InProgress
          ) {
            // Do nothing while waiting for server turn
            return;
          }
          const { newBoard } = move(state.board, row, col, state.turn);
          setInteraction({ waiting: false, loading: true });
          setState({ ...state, board: newBoard, turn: CellState.Cross });

          const res = await takeTurn(state.id, row, col);
          let strikethrough = null;
          if (GameStatus.isFinished(res.status)) {
            strikethrough = boardStatus(res.board);
          }
          setState({
            ...res,
            result: strikethrough,
            turn: CellState.Circle,
          });
          if (res.status === GameStatus.InProgress) {
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

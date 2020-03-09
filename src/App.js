import React, { useState } from "react";
import "./App.css";
import TicTacToe from "./controls/game/TicTacToe";
import Controls from "./controls/game/Controls";
import {
  GameStatus,
  INITIAL_BOARD,
  TurnType,
  Backend,
} from "./board/constants";
import { MinimaxBackend, ServerBackend } from "./board/backend";
import { boardStatus } from "./board/board";
import Menu from "./controls/menu/Menu";

function App() {
  const [state, setState] = useState(INITIAL_BOARD);
  const [backend, setBackend] = useState(new ServerBackend());
  const [interaction, setInteraction] = useState({
    loading: false,
    waiting: true,
  });

  return (
    <div className="App">
      <Menu
        backend={
          backend instanceof ServerBackend ? Backend.Server : Backend.Minimax
        }
        selectBackend={(backend) => {
          setState(INITIAL_BOARD);
          if (backend === Backend.Server) {
            setBackend(new ServerBackend());
          } else {
            setBackend(new MinimaxBackend());
          }
        }}
      />
      <Controls
        play={async (mine) => {
          setInteraction({ waiting: false, loading: true });
          const data = await backend.createBoard(mine);
          setState({
            ...data,
            // If server's turn, the first move is done by calling the create board
            turn: TurnType.Player,
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
            state.turn !== TurnType.Player ||
            state.status !== GameStatus.InProgress
          ) {
            // Do nothing while waiting for server turn
            return;
          }
          setInteraction({ waiting: false, loading: true });
          setState({ ...state, turn: TurnType.Ai });

          const res = await backend.takeTurn(state.id, row, col);
          let strikethrough = null;
          if (GameStatus.isFinished(res.status)) {
            strikethrough = boardStatus(res.board);
          }
          setState({
            ...res,
            result: strikethrough,
            turn: TurnType.Player,
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

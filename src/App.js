import React from 'react';
import './App.css';
import TicTacToe from "./TicTacToe";

function App() {
  return (
    <div className="App">
      <TicTacToe board={[
        ['o', 'x', null],
        ['o', 'x', null],
        ['o', 'x', null],
      ]} />
    </div>
  );
}

export default App;

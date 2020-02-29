import React from "react";
import PropTypes from "prop-types";
import "./TicTacToe.css";
import Cell from "./Cell";

const TicTacToe = props => {
  return (
    <div className="tictactoe">
      {props.board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Cell
              key={cellIndex}
              onClick={() => console.debug("Clicked", rowIndex, cellIndex)}
              value={cell}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

TicTacToe.propTypes = {
  board: PropTypes.array.isRequired
};

export default TicTacToe;

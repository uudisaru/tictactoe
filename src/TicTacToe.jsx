import React from "react";
import PropTypes from "prop-types";
import "./TicTacToe.css";
import Cell from "./Cell";

function renderStrikethrough(result) {
  const style = {};
  switch (result.type) {
    case "row":
      style.top = 48 + result.index * 102;
      break;
    case "col":
      style.left = 48 + result.index * 102;
      break;
    default: // diag
      style.transform = result.index === 0 ? "rotate(45deg)" : "rotate(-45deg)";
      break;
  }

  return <div className={"strike-through strike-through-" + result.type} style={style}></div>;
}

const TicTacToe = props => {
  return (
    <div className="tictactoe">
      {props.board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Cell
              key={cellIndex}
              onClick={
                !props.result
                  ? () => props.move(rowIndex, cellIndex)
                  : undefined
              }
              value={cell}
            />
          ))}
        </div>
      ))}
      {props.result && renderStrikethrough(props.result)}
    </div>
  );
};

TicTacToe.propTypes = {
  board: PropTypes.array.isRequired,
  move: PropTypes.func.isRequired,
  result: PropTypes.object
};

export default TicTacToe;

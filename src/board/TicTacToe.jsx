import React from "react";
import PropTypes from "prop-types";
import "./TicTacToe.css";
import Cell from "./Cell";
import Loader from "../controls/Loader";
import Overlay from "../controls/Overlay";

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
  let overlay = undefined;
  if (props.interaction.loading) {
    overlay = <Loader size={90}/>;
  }
  if (props.interaction.waiting) {
    overlay = <Overlay size={24} text="Start a game"/>;
  }
  return (
    <main className="tictactoe">
      {props.board.map((row, rowIndex) => (
        <div className="tictactoe__row" key={rowIndex}>
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
      {overlay}
    </main>
  );
};

TicTacToe.propTypes = {
  board: PropTypes.array.isRequired,
  interaction: PropTypes.object.isRequired,
  move: PropTypes.func.isRequired,
  result: PropTypes.object
};

export default TicTacToe;

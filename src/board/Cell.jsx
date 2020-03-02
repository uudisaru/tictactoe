import React from "react";
import PropTypes from "prop-types";
import { CellState } from "./constants";

const Cell = ({ onClick, value }) => {
  return (
    <div className="cell">
      {value === CellState.Circle ? (
        <div className="cell__circle" />
      ) : value === CellState.Cross ? (
        <div className="cell__cross" />
      ) : (
        <button className="cell__empty" onClick={onClick} />
      )}
    </div>
  );
};

Cell.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.oneOf([CellState.Circle, CellState.Cross, CellState.Empty]).isRequired,
};

export default Cell;

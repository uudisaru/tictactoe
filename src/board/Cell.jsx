import React from "react";
import PropTypes from "prop-types";
import { CellState } from "./constants";

const Cell = ({ onClick, value }) => {
  return (
    <div className="cell">
      {value === CellState.Circle ? (
        <div className="circle" />
      ) : value === CellState.Cross ? (
        <div className="cross" />
      ) : (
        <button className="empty" onClick={onClick} />
      )}
    </div>
  );
};

Cell.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.oneOf([CellState.Circle, CellState.Cross, CellState.Empty]).isRequired,
};

export default Cell;

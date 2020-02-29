import React from "react";
import PropTypes from "prop-types";

export const CIRCLE = 1;
export const CROSS = -1;
export const EMPTY = 0;

const Cell = ({ onClick, value }) => {
  return (
    <div className="cell">
      {value === CIRCLE ? (
        <div className="circle" />
      ) : value === CROSS ? (
        <div className="cross" />
      ) : (
        <button className="empty" onClick={onClick} />
      )}
    </div>
  );
};

Cell.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.oneOf([CIRCLE, CROSS, EMPTY]).isRequired,
};

export default Cell;

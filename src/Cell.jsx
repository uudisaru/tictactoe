import React from "react";
import PropTypes from "prop-types";

const Cell = ({ onClick, value }) => {
  return (
    <div className="cell">
      {value === "o" ? (
        <div className="circle" />
      ) : value === "x" ? (
        <div className="cross" />
      ) : (
        <button className="empty" onClick={onClick} />
      )}
    </div>
  );
};

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOf(["o", "x"]),
};

export default Cell;

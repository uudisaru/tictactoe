import React from "react";
import PropTypes from "prop-types";
import "./GameStatus.css";

const GameStatus = ({reset, status}) => {
  return (
    <div className="game-status">
      <div className="game-status-text">{status}</div>
      <div className="game-status-reset">
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

GameStatus.propTypes = {
  reset: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
};

export default GameStatus;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { BoardStatus } from "../board/constants";
import "./Controls.css";

const Controls = props => {
  const [mine, setMine] = useState(true);
  return (
    <header className="controls">
      <div className="controls__status">
        <label>Status:</label>
        <span>{props.status}</span>
      </div>
      {props.status !== BoardStatus.InProgress && (
        <div className="controls__game">
          <div className="game__start">
            <input id="my-start" type="checkbox" checked={mine} onChange={() => setMine(!mine)}/>
            <label htmlFor="my-start">Start with my move</label>
          </div>
          <div className="game__play">
            <button onClick={() => props.play(mine)}>
              {props.status === BoardStatus.Uninitialized
                ? "Play"
                : "Play again"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

Controls.propTypes = {
  play: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
};

export default Controls;

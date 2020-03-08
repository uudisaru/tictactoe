import React from "react";
import PropTypes from "prop-types";
import "./Overlay.css";

const Overlay = props => {
  return (
    <div className="overlay">
      <div className="overlay__center">
        <span style={{fontSize: props.size}}>{props.text}</span>
      </div>
    </div>
  );
};

Overlay.propTypes = {
  size: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Overlay;

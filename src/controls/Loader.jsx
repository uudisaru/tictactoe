import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

const Loader = (props) => {
  return (
    <div className="loader" style={{fontSize: props.size}}>
      <div className="loader__center">
        <i className="fa fa-cog fa-spin" />
      </div>
    </div>
  );
}

Loader.propTypes = {
  size: PropTypes.number.isRequired,
}

export default Loader;
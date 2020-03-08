import React, { useCallback, useState, useRef } from "react";
import { Backend } from "../../board/constants";
import "./Menu.css";
import { useOnClickOutside } from "../common/hooks";

const Switch = ({ label, checked, onChange }) => {
  const id = label.replace(" ", "-");
  return (
    <div className="switch">
      <div className="switch__container">
        <input
          id={id}
          checked={checked}
          onChange={onChange}
          className="switch__input"
          type="checkbox"
        />
        <label htmlFor={id} className="switch__label" />
      </div>
      <div className="switch__content">{label}</div>
    </div>
  );
};

function makeSelectHandler(backend, deselectBackend, select) {
  return function handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    if (value) {
      select(backend);
    } else {
      select(deselectBackend);
    }
  };
}

const Menu = ({ backend, selectBackend }) => {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const handler = useCallback(() => setOpen(false), []);
  const serverHandler = useCallback(
    makeSelectHandler(Backend.Server, Backend.Minimax, selectBackend),
    []
  );
  const minimaxHandler = useCallback(
    makeSelectHandler(Backend.Minimax, Backend.Server, selectBackend),
    []
  );
  useOnClickOutside(ref, handler);

  return (
    <div className="menu" ref={ref}>
      <button className="menu__toggler" onClick={() => setOpen(!open)}>
        <i className="fas fa-bars"></i>
      </button>
      {open && (
        <div className="menu__dropdown">
          <div>Play against</div>
          <Switch
            checked={backend === Backend.Server}
            label={Backend.Server}
            onChange={serverHandler}
          />
          <Switch
            checked={backend === Backend.Minimax}
            label={Backend.Minimax}
            onChange={minimaxHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Menu;

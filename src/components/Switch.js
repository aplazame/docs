import { defaultProps } from 'prism-react-renderer';
import React from 'react';
import './Switch.css';

const Switch = ({ isOn, handleToggle, name, onColor }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`${name}-react-switch-new`}
        name={name}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`${name}-react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;

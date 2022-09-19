import { defaultProps } from 'prism-react-renderer';
import React from 'react';
import Translate from '@docusaurus/Translate';
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
        className={`react-switch-label ${ isOn ? 'is-checked' : '' }`}
        htmlFor={`${name}-react-switch-new`}
      >
        <span className={`react-switch-button`}/>
        <span className='text-yes'><Translate id="table.yes">Sí</Translate></span>
        <span className='text-no'>No</span>

      </label>
    </>
  );
};

export default Switch;

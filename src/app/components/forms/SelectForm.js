import React from 'react';
import styles from './Forms.module.css';
/**
 * @name FormItemDropdown
 * @description Input field
 * @return component
 */
const FormItemDropdown = ({
  onChange, value, id, label, options, onClick
}) => (

  <div>
    <label className={styles.label} htmlFor={id}>
      {label}
      <select
        className={styles.dropDownInput}
        id={id}
        onChange={onChange}
        value={value}
        onClick={onClick}
      >
        {options.map((optionText) => (
          <option
            value={optionText}
            key={optionText}
          >
            {optionText}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default FormItemDropdown;

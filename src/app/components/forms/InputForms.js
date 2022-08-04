import React from 'react';
import styles from './Forms.module.css';
/**
 * @name FormItem
 * @description Input field
 * @return component
 */
const FormItem = ({
  onChange, value, id, label, placeholder, type, hasErrors
}) => (

  <div>
    <form htmlFor={id}>
      {label}
      <input
        className={`${styles.input} ${hasErrors ? styles.inputErrors : ''}`}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </form>
  </div>
);

export default FormItem;

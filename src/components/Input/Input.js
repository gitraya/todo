import './Input.css';
import { useState } from 'react';

const Input = ({
  id,
  label,
  accept,
  alt,
  autoCapitalize,
  autoComplete,
  autoCorrect,
  autoFocus,
  capture,
  checked,
  cols,
  dirname,
  disabled,
  form,
  formAction,
  formEncType,
  formMethod,
  formNoValidate,
  formTarget,
  height,
  list,
  max,
  maxLength,
  min,
  minLength,
  multiple,
  name,
  pattern,
  placeholder,
  readOnly,
  required,
  rows,
  src,
  step,
  type,
  value,
  width,
  size,
  spellCheck,
  wrap,
  error,
  helperText,
  fullWidth,
  startIcon,
  endIcon,
  multiline,
  row,
}) => {
  // State of component
  const [state, setstate] = useState({
    value: value,
  });

  // Class of input component
  const controlClass = `input-control ${error ? 'error' : ''} ${
    startIcon ? 'input-icon' : ''
  } ${fullWidth ? 'fullWidth' : ''}`;
  const iconClass = `icon ${startIcon ? 'startIcon' : ''} ${
    endIcon ? 'endIcon' : ''
  }`;

  // Function to change value of input
  function onValueChange(value) {
    setstate({
      value: value,
    });
  }

  const multilineRowStyle = {
    height: `${multiline ? `${parseInt(row) * 37.5}px` : 'initial'}`,
  };

  // Check size prop
  switch (size) {
    case 'sm':
      size = { padding: '10px 12px', width: '200px' };
      break;
    case 'md':
      size = { padding: '18px 12px', width: '200px' };
      break;
    default:
      size = { padding: '18px 12px', width: '200px' };
      break;
  }

  // Component html
  return (
    <div className={controlClass}>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <div className="input-wrap">
        <i className={iconClass}>{startIcon}</i>
        {multiline ? (
          <textarea
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            autoCorrect={autoCorrect}
            autoFocus={autoFocus}
            cols={cols}
            disabled={disabled}
            form={form}
            maxLength={maxLength}
            minLength={minLength}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            rows={rows}
            spellCheck={spellCheck}
            wrap={wrap}
            value={state.value}
            className="input"
            style={{ ...size, ...multilineRowStyle }}
            onChange={(e) => onValueChange(e.target.value)}
          ></textarea>
        ) : (
          <input
            id={id}
            accept={accept}
            alt={alt}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            capture={capture}
            checked={checked}
            dirname={dirname}
            disabled={disabled}
            form={form}
            formAction={formAction}
            formEncType={formEncType}
            formMethod={formMethod}
            formNoValidate={formNoValidate}
            formTarget={formTarget}
            height={height}
            list={list}
            max={max}
            maxLength={maxLength}
            min={min}
            minLength={minLength}
            multiple={multiple}
            name={name}
            pattern={pattern}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            src={src}
            step={step}
            type={type}
            value={state.value}
            width={width}
            className="input"
            style={size}
            onChange={(e) => onValueChange(e.target.value)}
          />
        )}
        <i className={iconClass}>{endIcon}</i>
      </div>
      <small className="helperText">{helperText}</small>
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;

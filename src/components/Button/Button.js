import './Button.css';

const Button = ({
  color,
  text,
  size,
  variant,
  disabled,
  disableShadow,
  startIcon,
  endIcon,
  demohover,
}) => {
  const buttonClass = `button ft-ns-jp ${color} ${variant} ${
    disableShadow ? 'disableShadow' : ''
  } ${demohover}`;

  switch (size) {
    case 'sm':
      size = { padding: '6px 12px' };
      break;
    case 'md':
      size = { padding: '8px 16px' };
      break;
    case 'lg':
      size = { padding: '11px 22px' };
      break;
  }

  return (
    <button className={buttonClass} style={size} disabled={disabled}>
      <i className={startIcon ? 'startIcon' : ''}>{startIcon}</i>
      {text}
      <i className={endIcon ? 'endIcon' : ''}>{endIcon}</i>
    </button>
  );
};

Button.defaultProps = {
  color: 'default',
  text: 'Default',
  size: 'md',
};

export default Button;

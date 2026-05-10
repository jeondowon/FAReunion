import Icon from './Icon';

export default function Button({ variant = 'primary', size, block, children, leftIcon, rightIcon, ...rest }) {
  return (
    <button
      className={`btn btn-${variant} ${block ? 'btn-block' : ''} ${size === 'sm' ? 'btn-sm' : ''}`}
      {...rest}
    >
      {leftIcon && <Icon name={leftIcon} size={size === 'sm' ? 14 : 16} />}
      <span>{children}</span>
      {rightIcon && <Icon name={rightIcon} size={size === 'sm' ? 14 : 16} />}
    </button>
  );
}

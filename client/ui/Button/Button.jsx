import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

export default function Button(props) {
  const {
    type, value, variant, color, className, children, disabled,
  } = props;
  const buttonClasses = cn({
    [styles.btn]: true,
    [className]: true,
    [styles[color]]: true,
    [styles[variant]]: true,
    [styles.disabled]: disabled,
  });
  return (
    <button
      className={buttonClasses}
      type={type}
      disabled={disabled}
    >
      {children || value}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['reset', 'submit', 'button']),
  variant: PropTypes.oneOf(['default', 'outlined']),
  color: PropTypes.oneOf(['green', 'gray']),
  value: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  variant: 'default',
  value: 'button',
  color: 'gray',
  children: null,
  className: '',
  disabled: false,
};

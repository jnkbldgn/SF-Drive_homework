import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Button(props) {
  const { type, value, children } = props;
  return (
    <button
      className={styles.btn}
      type={type}
    >
      {children || value}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['reset', 'submit', 'button']),
  value: PropTypes.node,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
  value: 'button',
  children: null,
};

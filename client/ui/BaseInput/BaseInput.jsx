import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

export default function BaseInput(props) {
  const {
    defaultValue, name, placeholder, type, className, id, onChange, onInput, onFocus, onBlur,
  } = props;
  const [value, setValue] = useState(defaultValue);

  const inputHandler = (event) => setValue(event.target.value) && onInput(event);
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={cn(className, styles.baseInput)}
      value={defaultValue || value}
      onChange={onChange}
      onInput={inputHandler}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
}

BaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

BaseInput.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
  defaultValue: '',
  id: '',
  onChange: () => {},
  onInput: () => {},
  onFocus: () => {},
  onBlur: () => {},
};

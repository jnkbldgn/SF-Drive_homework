import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

export default function BaseInput(props) {
  const {
    defaultValue, name, placeholder, type, className,
  } = props;
  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => setValue(event.target.value);
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={cn(className, styles.input)}
      value={value}
      onChange={onChange}
      onInput={onChange}
    />
  );
}

BaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BaseInput.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
  defaultValue: '',
};

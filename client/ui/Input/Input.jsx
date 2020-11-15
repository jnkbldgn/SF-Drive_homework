import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import BaseInput from 'ui/BaseInput';
import styles from './styles.module.scss';

export default function Input(props) {
  const {
    defaultValue, name, placeholder, type, className, id, onChange,
  } = props;
  const [isFocus, setFocus] = useState(false);

  const rootClasses = cn({
    [className]: true,
    [styles.input]: true,
    [styles.inputFocus]: isFocus,
  });

  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  return (
    <div className={rootClasses}>
      <BaseInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultProps={defaultValue}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
  defaultValue: '',
  id: '',
};

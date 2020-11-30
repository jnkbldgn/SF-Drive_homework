import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import InputMask from 'react-input-mask';
import styles from './styles.module.scss';

export default function BaseInput(props) {
  const {
    defaultValue,
    name,
    mask,
    maskPlaceholder,
    alwaysShowMask,
    type,
    className,
    id,
    onChange,
    onInput,
    onFocus,
    onBlur,
  } = props;
  const [value, setValue] = useState(defaultValue);

  const inputHandler = (event) => setValue(event.target.value) && onInput(event);
  return (
    <InputMask
      mask={mask}
      maskPlaceholder={maskPlaceholder}
      alwaysShowMask={alwaysShowMask}
      value={defaultValue || value}
      onChange={onChange}
      onInput={inputHandler}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      <input
        id={id}
        name={name}
        type={type}
        className={cn(className, styles.baseInput)}
      />
    </InputMask>
  );
}

BaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string,
  mask: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.instanceOf(RegExp)),
  ]),
  maskPlaceholder: PropTypes.string,
  alwaysShowMask: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

BaseInput.defaultProps = {
  type: 'text',
  alwaysShowMask: true,
  mask: undefined,
  maskPlaceholder: undefined,
  className: undefined,
  defaultValue: undefined,
  id: undefined,
  onChange: undefined,
  onInput: undefined,
  onFocus: undefined,
  onBlur: undefined,
};

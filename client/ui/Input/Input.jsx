import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import BaseInput from 'ui/BaseInput';
import styles from './styles.module.scss';

export default function Input(props) {
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
    children,
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
        mask={mask}
        maskPlaceholder={maskPlaceholder}
        alwaysShowMask={alwaysShowMask}
        defaultValue={defaultValue}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
      {children}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  mask: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.instanceOf(RegExp)),
  ]),
  maskPlaceholder: PropTypes.string,
  alwaysShowMask: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Input.defaultProps = {
  type: 'text',
  className: undefined,
  defaultValue: undefined,
  id: undefined,
  children: null,
  mask: undefined,
  maskPlaceholder: undefined,
  alwaysShowMask: true,
};

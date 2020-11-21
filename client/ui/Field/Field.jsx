import cn from 'classnames';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Input from 'ui/Input';
import Text from 'ui/Text';
import ValidationRule from 'models/ValidationRule';
import styles from './styles.module.scss';

export default function Field(props) {
  const {
    className,
    id,
    label,
    name,
    type,
    placeholder,
    defaultValue,
    control,
    error,
    required,
    pattern,
    validate,
    children,
  } = props;

  const rules = {
    required,
    pattern,
    validate,
  };

  const hasError = typeof error.message !== 'undefined';
  const inputClasses = cn({
    [styles.fieldInput]: true,
    [styles.fieldInputError]: hasError,
  });

  const inputRender = (inputProps) => (
    <Input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={inputClasses}
      defaultValue={defaultValue}
      onChange={(event) => inputProps.onChange(event.target.value)}
    >
      {children}
    </Input>
  );

  return (
    <div
      className={cn(styles.field, className)}
    >
      <label
        htmlFor={id}
        className={styles.fieldLabel}
      >
        <Text
          tag="span"
          size="14"
          weight="400"
        >
          {label}
        </Text>
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={inputRender}
      />
      {
        hasError
        && (
        <Text
          tag="span"
          size="14"
          className={styles.fieldError}
          weight="400"
        >
          {error.message}
        </Text>
        )
      }
    </div>
  );
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.object,
  children: PropTypes.node,
  required: PropTypes.instanceOf(ValidationRule),
  pattern: PropTypes.instanceOf(ValidationRule),
  validate: PropTypes.func,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
  defaultValue: '',
  id: '',
  error: {},
  children: null,
  required: new ValidationRule(false, ''),
  pattern: new ValidationRule(false, ''),
  validate: undefined,
};

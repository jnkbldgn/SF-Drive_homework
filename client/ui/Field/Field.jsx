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
    labelClassName,
    inputClassName,
    errorClassName,
  } = props;

  const rules = {
    required,
    pattern,
    validate,
  };

  const hasError = error && error.message;
  const inputClasses = cn({
    [styles.fieldInput]: true,
    [styles.fieldInputError]: hasError,
    [inputClassName]: !!inputClassName,
  });

  const inputRender = (inputProps) => (
    <>
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
        {
          hasError
          && (
          <Text
            tag="span"
            size="14"
            className={cn(styles.fieldError, errorClassName)}
            weight="400"
          >
            {error.message}
          </Text>
          )
        }
      </Input>

    </>
  );

  return (
    <div
      className={cn(styles.field, className)}
    >
      <label
        htmlFor={id}
        className={cn(styles.fieldLabel, labelClassName)}
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
    </div>
  );
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.object,
  children: PropTypes.node,
  required: PropTypes.instanceOf(ValidationRule),
  pattern: PropTypes.instanceOf(ValidationRule),
  validate: PropTypes.func,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
  defaultValue: '',
  placeholder: undefined,
  className: undefined,
  error: undefined,
  children: undefined,
  required: new ValidationRule(false, undefined),
  pattern: new ValidationRule(false, undefined),
  validate: undefined,
  inputClassName: undefined,
  labelClassName: undefined,
  errorClassName: undefined,
};

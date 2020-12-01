import PropTypes from 'prop-types';
import cn from 'classnames';
import Field from 'ui/Field';
import Icon from 'ui/Icon';
import Button from 'ui/Button';
import ValidationRule from 'models/ValidationRule';
import styles from './styles.module.scss';

export default function DatePicker(props) {
  const {
    className,
    id,
    label,
    name,
    defaultValue,
    control,
    error,
    required,
    mask,
    maskPlaceholder,
    placeholder,
    alwaysShowMask,
    validate,
    labelClassName,
    inputClassName,
    errorClassName,
  } = props;

  return (
    <Field
      className={cn(className, styles.datePicker)}
      defaultValue={defaultValue}
      control={control}
      error={error}
      id={id}
      label={label}
      name={name}
      mask={mask}
      maskPlaceholder={maskPlaceholder}
      placeholder={placeholder}
      alwaysShowMask={alwaysShowMask}
      required={required}
      validate={validate}
      labelClassName={labelClassName}
      inputClassName={inputClassName}
      errorClassName={errorClassName}
    >
      <Button
        className={styles.datePickerButton}
        variant="icon"
      >
        <Icon
          className={styles.datePickerButtonIcon}
          name="calendar"
        />
      </Button>
    </Field>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  mask: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.instanceOf(RegExp)),
  ]),
  maskPlaceholder: PropTypes.string,
  placeholder: PropTypes.string,
  alwaysShowMask: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.object,
  required: PropTypes.instanceOf(ValidationRule),
  validate: PropTypes.func,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string,
};

const validate = (value) => {
  const [day, month, year] = value.split('.');
  const date = Date.parse(`${month}/${day}/${year}`);
  return !Number.isNaN(date) || 'Неверный формат даты';
};
DatePicker.defaultProps = {
  mask: '99.99.9999',
  maskPlaceholder: '0',
  placeholder: '00.00.0000',
  alwaysShowMask: true,
  className: undefined,
  defaultValue: undefined,
  id: undefined,
  error: {},
  required: new ValidationRule(false, ''),
  validate,
  inputClassName: undefined,
  labelClassName: undefined,
  errorClassName: undefined,
};

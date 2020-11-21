import PropTypes from 'prop-types';
import cn from 'classnames';
import Field from 'ui/Field';
import Icon from 'ui/Icon';
import Button from 'ui/Button';
import ValidationRule from 'models/ValidationRule';
import styles from './styles.module.scss';

export default function DatePicker(props) {
  const {
    className, id, label, name, defaultValue, control, error, required, placeholder, validate,
  } = props;

  return (
    <div
      className={cn(className, styles.datePicker)}
    >
      <Field
        defaultValue={defaultValue}
        control={control}
        error={error}
        id={id}
        label={label}
        name={name}
        placeholder={placeholder}
        required={required}
        validate={validate}
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
    </div>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.object,
  required: PropTypes.instanceOf(ValidationRule),
  validate: PropTypes.func,
};

const validate = (value) => {
  const [day, month, year] = value.split('.');
  const date = Date.parse(`${month}/${day}/${year}`);
  return !Number.isNaN(date) || 'Неверный формат даты';
};
DatePicker.defaultProps = {
  placeholder: '00.00.0000',
  className: '',
  defaultValue: '',
  id: '',
  error: {},
  required: new ValidationRule(false, ''),
  validate,
};

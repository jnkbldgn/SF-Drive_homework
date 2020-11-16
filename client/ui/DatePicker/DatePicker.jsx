import PropTypes from 'prop-types';
import cn from 'classnames';
import Field from 'ui/Field';
import Icon from 'ui/Icon';
import Button from 'ui/Button';
import styles from './styles.module.scss';

export default function DatePicker(props) {
  const {
    className, id, label, name, placeholder, defaultValue, control, error, required, pattern,
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
        pattern={pattern}
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
  required: PropTypes.bool,
  pattern: PropTypes.any,
};

DatePicker.defaultProps = {
  placeholder: '',
  className: '',
  defaultValue: '',
  id: '',
  error: {},
  required: false,
  pattern: '',
};

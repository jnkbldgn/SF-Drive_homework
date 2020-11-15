import cn from 'classnames';
import PropTypes from 'prop-types';
import Input from 'ui/Input';
import Text from 'ui/Text';
import styles from './styles.module.scss';

export default function Field(props) {
  const {
    className, id, label, name, type, placeholder, defaultValue,
  } = props;

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
      <Input
        className={styles.fieldInput}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
  defaultValue: '',
  id: '',
};

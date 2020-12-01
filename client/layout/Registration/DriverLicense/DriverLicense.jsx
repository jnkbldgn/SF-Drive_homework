import Text from 'ui/Text';
import Field from 'ui/Field';
import DatePicker from 'ui/DatePicker';
import PropTypes from 'prop-types';
import ValidationRule from 'models/ValidationRule';
import PropOfDevice from 'models/PropOfDevice';
import { MOBILE_BREAK_POINT as BREAK_POINT } from 'constants';
import cn from 'classnames';
import styles from '../form.block.module.scss';

const titleSize = new PropOfDevice(36, 24, BREAK_POINT);

const titleWeight = new PropOfDevice(400, 500, BREAK_POINT);

export default function DriverLicense(props) {
  const { control, errors, className } = props;
  const requiredRule = new ValidationRule(true, 'Обязательное поле');
  return (
    <section
      className={cn(styles.root, className)}
    >
      <header
        className={styles.title}
      >
        <Text
          tag="h2"
          size={titleSize}
          weight={titleWeight}
        >
          Водительское удостоверение
        </Text>
        <Field
          label="Серия и номер"
          name="driverLicenseNumber"
          id="driverLicenseNumber"
          mask="9999 999999"
          maskPlaceholder="0"
          className={styles.field}
          labelClassName={styles.fieldLabel}
          inputClassName={styles.fieldInputS}
          control={control}
          error={errors.driverLicenseNumber}
          required={requiredRule}
        />
        <DatePicker
          label="Дата выдачи"
          name="driverLicenseCreateAt"
          id="driverLicenseCreateAt"
          className={styles.field}
          labelClassName={styles.fieldLabel}
          inputClassName={styles.fieldInputS}
          control={control}
          error={errors.driverLicenseCreateAt}
          required={requiredRule}
        />
      </header>
    </section>
  );
}

DriverLicense.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  className: PropTypes.string,
};

DriverLicense.defaultProps = {
  className: undefined,
};

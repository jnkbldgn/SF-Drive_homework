import Text from 'ui/Text';
import Field from 'ui/Field';
import DatePicker from 'ui/DatePicker';
import PropTypes from 'prop-types';
import ValidationRule from 'models/ValidationRule';
import styles from './styles.module.scss';

export default function DriverLicense(props) {
  const { control, errors } = props;
  const requiredRule = new ValidationRule(true, 'Обязательное поле');
  return (
    <section
      className={styles.root}
    >
      <header
        className={styles.header}
      >
        <Text
          tag="h2"
          size="24"
          weight="500"
        >
          Водительское удостоверение
        </Text>
        <Field
          label="Серия и номер"
          name="driverLicenseNumber"
          id="driverLicenseNumber"
          placeholder="0000 000000"
          className={styles.field}
          control={control}
          error={errors.driverLicenseNumber}
          required={requiredRule}
        />
        <DatePicker
          label="Дата выдачи"
          name="driverLicenseCreateAt"
          id="driverLicenseCreateAt"
          className={styles.field}
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
};

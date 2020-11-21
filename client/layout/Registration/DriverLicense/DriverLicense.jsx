import Text from 'ui/Text';
import Field from 'ui/Field';
import DatePicker from 'ui/DatePicker';
import PropTypes from 'prop-types';
import ValidationRule from 'models/ValidationRule';
import styles from './styles.module.scss';

export default function DriverLicense(props) {
  const { control, errors } = props;
  const datePattern = new ValidationRule(/\d{2}\.\d{2}\.\d{4}/, 'Неверный формат');
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
          name="numberDriver"
          id="numberDriver"
          placeholder="0000 000000"
          className={styles.field}
          control={control}
          error={errors.numberDriver}
          required={requiredRule}
        />
        <DatePicker
          label="Дата выдачи"
          name="createAtDriver"
          id="createAtDriver"
          className={styles.field}
          control={control}
          error={errors.createAtDriver}
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

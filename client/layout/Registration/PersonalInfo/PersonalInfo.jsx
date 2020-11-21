import Text from 'ui/Text';
import DatePicker from 'ui/DatePicker';
import Field from 'ui/Field';
import PropTypes from 'prop-types';
import ValidationRule from 'models/ValidationRule';
import styles from './styles.module.scss';

export default function PersonalInfo(props) {
  const { control, errors } = props;
  const mailPattern = new ValidationRule(/.+@.+/, 'Неверный формат email');
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
          Информация о вас
        </Text>
        <Field
          label="ФИО"
          name="fio"
          id="fio"
          placeholder="ФИО полностью"
          className={styles.field}
          control={control}
          error={errors.fio}
          required={requiredRule}
        />
        <DatePicker
          label="Дата рождения"
          name="birthday"
          id="birthday"
          className={styles.field}
          control={control}
          error={errors.birthday}
          required={requiredRule}
        />
        <Field
          label="Электронная почта"
          name="email"
          id="email"
          placeholder="mail@example.com"
          className={styles.field}
          control={control}
          error={errors.email}
          required={requiredRule}
          pattern={mailPattern}
        />
        <Field
          label="Телефон"
          name="phone"
          id="phone"
          placeholder="+7 900 000-00-00"
          className={styles.field}
          control={control}
          error={errors.phone}
          required={requiredRule}
        />
      </header>
    </section>
  );
}

PersonalInfo.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

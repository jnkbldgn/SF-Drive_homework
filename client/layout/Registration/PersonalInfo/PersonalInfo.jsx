import Text from 'ui/Text';
import Field from 'ui/Field';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function PersonalInfo(props) {
  const { control, errors } = props;
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
        />
        <Field
          label="Дата рождения"
          name="birthday"
          id="birthday"
          className={styles.field}
          control={control}
          error={errors.birthday}
          pattern={/\d{2}\.\d{2}\.\d{4}/}
        />
        <Field
          label="Электронная почта"
          name="email"
          id="email"
          placeholder="mail@example.com"
          className={styles.field}
          control={control}
          error={errors.email}
        />
        <Field
          label="Телефон"
          name="phone"
          id="phone"
          placeholder="+7 900 000-00-00"
          className={styles.field}
          control={control}
          error={errors.phone}
        />
      </header>
    </section>
  );
}

PersonalInfo.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

import Text from 'ui/Text';
import DatePicker from 'ui/DatePicker';
import Field from 'ui/Field';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function IdentityCard(props) {
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
          Паспорт
        </Text>
        <Field
          label="Серия и номер"
          name="number"
          id="number"
          placeholder="0000 000000"
          className={styles.field}
          control={control}
          error={errors.number}
        />
        <DatePicker
          label="Дата выдачи"
          name="createAt"
          id="createAt"
          className={styles.field}
          control={control}
          error={errors.createAt}
          placeholder="00.00.0000"
          pattern={/\d{2}\.\d{2}\.\d{4}/}
        />
        <Field
          label="Кем выдан"
          name="authority"
          id="authority"
          placeholder="Название органа выдавшего паспорт"
          className={styles.field}
          control={control}
          error={errors.authority}
        />
        <Field
          label="Код подразделения"
          name="code"
          id="code"
          placeholder="000-000"
          className={styles.field}
          control={control}
          error={errors.code}
          pattern={/\d{3}-\d{3}/}
        />
      </header>
    </section>
  );
}

IdentityCard.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

import Text from 'ui/Text';
import Field from 'ui/Field';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function DriverLicense(props) {
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
        />
        <Field
          label="Дата выдачи"
          name="createAtDriver"
          placeholder="00.00.0000"
          id="createAtDriver"
          className={styles.field}
          control={control}
          pattern={/\d{2}\.\d{2}\.\d{4}/}
          error={errors.createAtDriver}
        />
      </header>
    </section>
  );
}

DriverLicense.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

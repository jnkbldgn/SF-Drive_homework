import Text from 'ui/Text';
import Field from 'ui/Field';
import styles from './styles.module.scss';

export default function PersonalInfo() {
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
        />
        <Field
          label="Дата выдачи"
          name="createAtDriver"
          placeholder="00.00.0000"
          id="createAtDriver"
          className={styles.field}
        />
      </header>
    </section>
  );
}

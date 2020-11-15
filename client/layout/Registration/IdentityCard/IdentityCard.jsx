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
          Паспорт
        </Text>
        <Field
          label="Серия и номер"
          name="number"
          id="number"
          placeholder="0000 000000"
          className={styles.field}
        />
        <Field
          label="Дата выдачи"
          name="createAt"
          id="createAt"
          className={styles.field}
        />
        <Field
          label="Кем выдан"
          name="authority"
          id="authority"
          placeholder="Название органа выдавшего паспорт"
          className={styles.field}
        />
        <Field
          label="Код подразделения"
          name="code"
          id="code"
          placeholder="000-000"
          className={styles.field}
        />
      </header>
    </section>
  );
}

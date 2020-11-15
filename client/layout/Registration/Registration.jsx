import Text from 'ui/Text';
import styles from './styles.module.scss';

export default function Registration() {
  return (
    <>
      <Text
        tag="p"
        size="12"
        weight="400"
        className={styles.steps}
      >
        Шаг 1 из 3
      </Text>
      <Text
        tag="h1"
        size="32"
        weight="500"
        className={styles.header}
      >
        Расскажите о себе
      </Text>
    </>
  );
}

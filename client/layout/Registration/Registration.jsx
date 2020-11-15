import Text from 'ui/Text';
import Button from 'ui/Button';
import { useForm } from 'react-hook-form';
import PersonalInfo from './PersonalInfo';
import IdentityCard from './IdentityCard';
import DriverLicense from './DriverLicense';
import styles from './styles.module.scss';

export default function Registration() {
  const methods = useForm();
  const { control, errors, handleSubmit } = methods;

  const onSubmit = (data) => console.info(data);
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
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <PersonalInfo
          control={control}
          errors={errors}
        />
        <IdentityCard
          control={control}
          errors={errors}
        />
        <DriverLicense
          control={control}
          errors={errors}
        />
        <div
          className={styles.submit}
        >
          <Button
            type="submit"
            color="green"
            className={styles.submitButton}
          >
            <Text
              tag="span"
              size="16"
              weight="500"
            >
              Продолжить
            </Text>
          </Button>
        </div>
      </form>
    </>
  );
}

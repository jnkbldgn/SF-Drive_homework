import Text from 'ui/Text';
import Button from 'ui/Button';
import { useForm } from 'react-hook-form';
import { register } from 'api';
import PropOfDevice from 'models/PropOfDevice';
import { MOBILE_BREAK_POINT as BREAK_POINT } from 'constants';
import cn from 'classnames';
import PersonalInfo from './PersonalInfo';
import IdentityCard from './IdentityCard';
import DriverLicense from './DriverLicense';
import styles from './styles.module.scss';

const stepsSize = new PropOfDevice(20, 12, BREAK_POINT);
const titleSize = new PropOfDevice(64, 32, BREAK_POINT);

const titleWeight = new PropOfDevice(700, 500, BREAK_POINT);

export default function Registration() {
  const methods = useForm();
  const { control, errors, handleSubmit } = methods;

  const onSubmit = (data) => {
    register(data);
  };
  return (
    <>
      <Text
        tag="p"
        size={stepsSize}
        weight="400"
        className={cn(styles.wrap, styles.steps)}
      >
        Шаг 1 из 3
      </Text>
      <Text
        tag="h1"
        size={titleSize}
        weight={titleWeight}
        className={cn(styles.wrap, styles.title)}
      >
        Расскажите о себе
      </Text>
      <form
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <PersonalInfo
          control={control}
          errors={errors}
          className={styles.wrap}
        />
        <IdentityCard
          control={control}
          errors={errors}
          className={styles.wrap}
        />
        <DriverLicense
          control={control}
          errors={errors}
          className={styles.wrap}
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

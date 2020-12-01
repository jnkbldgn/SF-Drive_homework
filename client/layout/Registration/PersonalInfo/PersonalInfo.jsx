import Text from 'ui/Text';
import DatePicker from 'ui/DatePicker';
import Field from 'ui/Field';
import PropTypes from 'prop-types';
import ValidationRule from 'models/ValidationRule';
import PropOfDevice from 'models/PropOfDevice';
import { MOBILE_BREAK_POINT as BREAK_POINT } from 'constants';
import cn from 'classnames';
import styles from '../form.block.module.scss';

const mailReg = /.+@.+/;

const titleSize = new PropOfDevice(36, 24, BREAK_POINT);

const titleWeight = new PropOfDevice(400, 500, BREAK_POINT);

export default function PersonalInfo(props) {
  const { control, errors, className } = props;
  const mailPattern = new ValidationRule(mailReg, 'Неверный формат email');
  const requiredRule = new ValidationRule(true, 'Обязательное поле');
  return (
    <section
      className={cn(styles.root, className)}
    >
      <header
        className={styles.title}
      >
        <Text
          tag="h2"
          size={titleSize}
          weight={titleWeight}
        >
          Информация о вас
        </Text>
        <Field
          label="ФИО"
          name="fio"
          id="fio"
          placeholder="ФИО полностью"
          className={styles.field}
          labelClassName={styles.fieldLabel}
          inputClassName={styles.fieldInputL}
          control={control}
          error={errors.fio}
          required={requiredRule}
        />
        <DatePicker
          label="Дата рождения"
          name="birthday"
          id="birthday"
          className={styles.field}
          labelClassName={styles.fieldLabel}
          inputClassName={styles.fieldInputS}
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
          labelClassName={styles.fieldLabel}
          inputClassName={styles.fieldInputL}
          control={control}
          error={errors.email}
          required={requiredRule}
          pattern={mailPattern}
        />
        <Field
          label="Телефон"
          name="phone"
          id="phone"
          mask="+7 999 999-99-99"
          maskPlaceholder="0"
          className={styles.field}
          labelClassName={styles.fieldLabel}
          inputClassName={styles.fieldInputS}
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
  className: PropTypes.string,
};

PersonalInfo.defaultProps = {
  className: undefined,
};

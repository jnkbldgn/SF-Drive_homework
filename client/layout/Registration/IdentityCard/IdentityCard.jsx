import Text from 'ui/Text';
import DatePicker from 'ui/DatePicker';
import Field from 'ui/Field';
import PropTypes from 'prop-types';
import ValidationRule from 'models/ValidationRule';
import PropOfDevice from 'models/PropOfDevice';
import { MOBILE_BREAK_POINT as BREAK_POINT } from 'constants';
import cn from 'classnames';
import styles from '../form.block.module.scss';

const titleSize = new PropOfDevice(36, 24, BREAK_POINT);

const titleWeight = new PropOfDevice(400, 500, BREAK_POINT);

export default function IdentityCard(props) {
  const { control, errors, className } = props;
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
          Паспорт
        </Text>
        <Field
          label="Серия и номер"
          name="identityCardNumber"
          id="identityCardNumber"
          mask="9999 999999"
          maskPlaceholder="0"
          className={styles.field}
          labelClassName={styles.fieldLabel}
          inputClassName={styles.fieldInputS}
          control={control}
          error={errors.identityCardNumber}
          required={requiredRule}
        />
        <DatePicker
          label="Дата выдачи"
          name="identityCardCreateAt"
          id="identityCardCreateAt"
          className={styles.field}
          labelClassName={styles.fieldLabel}
          inputClassName={styles.fieldInputS}
          control={control}
          error={errors.identityCardCreateAt}
          required={requiredRule}
        />
        <Field
          label="Кем выдан"
          name="identityCardAuthority"
          id="identityCardAuthority"
          placeholder="Название органа выдавшего паспорт"
          className={styles.field}
          labelClassName={styles.fieldLabel}
          inputClassName={styles.fieldInputL}
          control={control}
          error={errors.identityCardAuthority}
          required={requiredRule}
        />
        <Field
          label="Код подразделения"
          name="identityCardCode"
          id="identityCardCode"
          mask="999-999"
          maskPlaceholder="0"
          className={styles.field}
          labelClassName={styles.fieldLabel}
          inputClassName={styles.fieldInputS}
          control={control}
          error={errors.identityCardCode}
          required={requiredRule}
        />
      </header>
    </section>
  );
}

IdentityCard.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  className: PropTypes.string,
};

IdentityCard.defaultProps = {
  className: undefined,
};

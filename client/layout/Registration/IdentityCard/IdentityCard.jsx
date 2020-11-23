import Text from 'ui/Text';
import DatePicker from 'ui/DatePicker';
import Field from 'ui/Field';
import PropTypes from 'prop-types';
import ValidationRule from 'models/ValidationRule';
import styles from './styles.module.scss';

export default function IdentityCard(props) {
  const { control, errors } = props;
  const codePattern = new ValidationRule(/\d{3}-\d{3}/, 'Неверный формат');
  const requiredRule = new ValidationRule(true, 'Обязательное поле');
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
          name="identityCardNumber"
          id="identityCardNumber"
          placeholder="0000 000000"
          className={styles.field}
          control={control}
          error={errors.identityCardNumber}
          required={requiredRule}
        />
        <DatePicker
          label="Дата выдачи"
          name="identityCardCreateAt"
          id="identityCardCreateAt"
          className={styles.field}
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
          control={control}
          error={errors.identityCardAuthority}
          required={requiredRule}
        />
        <Field
          label="Код подразделения"
          name="identityCardCode"
          id="identityCardCode"
          placeholder="000-000"
          className={styles.field}
          control={control}
          error={errors.identityCardCode}
          pattern={codePattern}
          required={requiredRule}
        />
      </header>
    </section>
  );
}

IdentityCard.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

import PropTypes from 'prop-types';
import cn from 'classnames';
import Text from 'ui/Text';
import styles from './styles.module.scss';
import { ContactModel } from './models';

export default function Contacts(props) {
  const { className } = props;
  const contactsModels = [
    new ContactModel('Электронная почта', 'drive@skillfactory.com'),
    new ContactModel('Телефон', '+7 912 123-45-67'),
  ];
  const contacts = contactsModels.map((item) => (
    <article
      key={item.title}
      className={styles.contact}
    >
      <Text
        tag="p"
        weight="400"
        size="12"
        className={styles.contactTitle}
      >
        {item.title}
      </Text>
      <Text
        tag="p"
        weight="400"
        size="14"
        className={styles.contactValue}
      >
        {item.value}
      </Text>
    </article>
  ));
  return (
    <section className={cn(className, styles.contacts)}>
      <header>
        <Text
          weight="500"
          size="24"
          tag="h2"
        >
          Контакты
        </Text>
      </header>
      {contacts}
    </section>
  );
}

Contacts.propTypes = {
  className: PropTypes.string,
};

Contacts.defaultProps = {
  className: '',
};

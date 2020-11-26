import PropTypes from 'prop-types';
import cn from 'classnames';
import Text from 'ui/Text';
import PropOfDevice from 'models/PropOfDevice';
import { MOBILE_BREAK_POINT as BREAK_POINT } from 'constants';
import styles from './styles.module.scss';
import { ContactModel } from './models';

const titleSize = new PropOfDevice(48, 24, BREAK_POINT);
const contactTitleSize = new PropOfDevice(14, 12, BREAK_POINT);
const contactValueSize = new PropOfDevice(20, 14, BREAK_POINT);

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
        size={contactTitleSize}
        className={styles.contactTitle}
      >
        {item.title}
      </Text>
      <Text
        tag="p"
        weight="400"
        size={contactValueSize}
        className={styles.contactValue}
      >
        {item.value}
      </Text>
    </article>
  ));
  return (
    <section className={cn(className, styles.contacts)}>
      <header
        className={styles.contactsTitle}
      >
        <Text
          weight="500"
          size={titleSize}
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

import Text from 'ui/Text';
import Picture from 'ui/Picture';
import PropOfDevice from 'models/PropOfDevice';
import { MOBILE_BREAK_POINT as BREAK_POINT } from 'constants';
import { Member } from './models';
import styles from './styles.module.scss';

const titleSize = new PropOfDevice(48, 24, BREAK_POINT);
const memberNameSize = new PropOfDevice(20, 16, BREAK_POINT);
const memberSpetialtySize = new PropOfDevice(14, 12, BREAK_POINT);

export default function Team() {
  const members = [
    new Member('Иван Иванов', 'CEO', 'about/about__seo', 'png'),
    new Member('Алексей Смирнов', 'Frontend-разработчик', 'about/about__front', 'png'),
    new Member('Денис Ярцев', 'Backend-разработчик', 'about/about__back', 'png'),
    new Member('Николай Морозов', 'Дизайнер', 'about/about__design', 'png'),
    new Member('Ирина Деева', 'Копирайтер', 'about/about__text', 'png'),
    new Member('Мария Стрелкова', 'SMM', 'about/about__smm', 'png'),
  ];

  const elements = members.map((item) => (
    <li key={item.imageName} className={styles.teamMember}>
      <Picture
        alt={item.specialty}
        name={item.imageName}
        ext={item.imageExt}
        platform="all"
        ratio="3"
        className={styles.teamMemberAvatar}
      />
      <Text
        size={memberNameSize}
        weight="500"
        className={styles.teamMemberName}
      >
        {item.name}
      </Text>
      <Text
        size={memberSpetialtySize}
        weight="500"
        className={styles.teamMemberSpecialty}
      >
        {item.specialty}
      </Text>
    </li>
  ));
  return (
    <section className={styles.team}>
      <header
        className={styles.teamTitle}
      >
        <Text
          tag="h2"
          weight="500"
          size={titleSize}
        >
          Команда
        </Text>
      </header>
      <ul className={styles.teamMembers}>
        {elements}
      </ul>
    </section>
  );
}

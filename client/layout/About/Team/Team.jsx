import Text from 'ui/Text';
import Picture from 'ui/Picture';
import { Member } from './models';
import styles from './styles.module.scss';

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
        size="16"
        weight="500"
        className={styles.teamMemberName}
      >
        {item.name}
      </Text>
      <Text
        size="12"
        weight="500"
        className={styles.teamMemberSpecialty}
      >
        {item.specialty}
      </Text>
    </li>
  ));
  return (
    <section className={styles.team}>
      <header>
        <Text
          tag="h2"
          weight="500"
          size="24"
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

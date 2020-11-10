import Text from 'ui/Text';
import Picture from 'ui/Picture';
import { Member } from './models';

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
    <li key={item.imageName}>
      <Picture
        alt={item.specialty}
        name={item.imageName}
        ext={item.imageExt}
        platform="all"
        ratio="3"
      />
    </li>
  ));
  return (
    <section>
      <header>
        <Text
          tag="h2"
          weight="500"
          size="32"
        >
          Команда
        </Text>
      </header>
      <ul>
        {elements}
      </ul>
    </section>
  );
}

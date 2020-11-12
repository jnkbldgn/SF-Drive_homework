import Image from 'ui/Image';
import Text from 'ui/Text';
import styles from './styles.module.scss';

export default function Info() {
  return (
    <section className={styles.info}>
      <Image
        alt="about"
        name="about/about__team.svg"
        className={styles.infoTeamImg}
      />
      <Text
        tag="h1"
        weight="500"
        size="32"
        className={styles.infoTitle}
      >
        О нас
      </Text>
      <Text
        tag="p"
        weight="400"
        size="16"
        className={styles.infoText}
      >
        Это учебный проект, созданный с целью получения боевого
        опыта в разработке настоящего живого веб-приложения.
        Этот сервис имитирует работу каршеринга, в котором можно
        не только арендовать автомобили, но и сдавать их в аренду.
      </Text>
    </section>
  );
}

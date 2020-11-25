import Image from 'ui/Image';
import Text from 'ui/Text';
import PropOfDevice from 'models/PropOfDevice';
import { MOBILE_BREAK_POINT as BREAK_POINT } from 'constants';
import styles from './styles.module.scss';

const titleSize = new PropOfDevice(64, 32, BREAK_POINT);
const titleWeidth = new PropOfDevice(700, 500, BREAK_POINT);

const textSize = new PropOfDevice(24, 16, BREAK_POINT);

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
        weight={titleWeidth}
        size={titleSize}
        className={styles.infoTitle}
      >
        О нас
      </Text>
      <Text
        tag="p"
        weight="400"
        size={textSize}
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

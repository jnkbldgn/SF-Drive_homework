import Image from 'ui/Image';
import Link from 'ui/Link';
import styles from './styles.module.scss';

export default function Logo() {
  return (
    <Link
      claaName={styles.root}
      href="/"
    >
      <Image
        alt="SkillDrive"
        src="images/logo.svg"
      />
    </Link>
  );
}

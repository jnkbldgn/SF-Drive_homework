import Logo from './Logo';
import Navigation from './Navigation';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header
      className={styles.root}
    >
      <Logo />
      <Navigation
        className={styles.navigation}
      />
    </header>
  );
}

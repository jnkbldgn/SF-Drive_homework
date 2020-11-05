import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
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

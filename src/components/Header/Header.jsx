import Logo from 'components/Logo';
import styles from 'components/Header/styles.module';

export default function Header() {
  return (
    <header className={styles.container}>
      <Logo />
      <Navigation />
    </header>
  );
}

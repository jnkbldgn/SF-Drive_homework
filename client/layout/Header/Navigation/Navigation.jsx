import Text from 'ui/Text';
import Link from 'ui/Link';
import Button from 'ui/Button';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { LinkModel } from './models';

export default function Navigation(props) {
  const { className } = props;
  const links = [
    new LinkModel('О нас', '/'),
    new LinkModel('Условия', '/'),
    new LinkModel('Частые вопросы', '/'),
  ];

  const listItems = links.map(({ text, url }) => (
    <li
      key={text}
      className={styles.listItem}
    >
      <Link
        href={url}
      >
        <Text
          size="16"
          weight="400"
        >
          {text}
        </Text>
      </Link>
    </li>
  ));

  return (
    <div className={cn(className, styles.root)}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {listItems}
          <li
            className={styles.listItem}
          />
        </ul>
      </nav>
      <Button
        className={styles.signIn}
        variant="outlined"
        color="gray"
      >
        <Text
          size="16"
          weight="500"
        >
          Войти
        </Text>
      </Button>
    </div>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

Navigation.defaultProps = {
  className: '',
};

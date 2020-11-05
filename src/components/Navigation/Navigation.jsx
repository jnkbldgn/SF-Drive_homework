import Text from 'ui/Text';
import Link from 'ui/Link';
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
    <nav className={cn(className, styles.root)}>
      <ul className={styles.list}>
        {listItems}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

Navigation.defaultProps = {
  className: '',
};

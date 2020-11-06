import cn from 'classnames';
import PropTypes from 'prop-types';
import Link from 'ui/Link';
import Icon from 'ui/Icon';
import styles from './styles.module.scss';
import { SocialNetworkModel } from './models';

export default function SocialNetwork(props) {
  const { className } = props;
  const socialNetworks = [
    new SocialNetworkModel('vk', '#'),
    new SocialNetworkModel('inst', '#'),
    new SocialNetworkModel('fb', '#'),
  ];
  const socialNetworksItems = socialNetworks.map(({ icon, url }) => (
    <li
      key={icon}
      className={styles.listItem}
    >
      <Link
        href={url}
      >
        <Icon
          className={styles.icon}
          name={icon}
        />
      </Link>
    </li>
  ));
  return (
    <ul className={cn(styles.root, className)}>
      {socialNetworksItems}
    </ul>
  );
}

SocialNetwork.propTypes = {
  className: PropTypes.string,
};

SocialNetwork.defaultProps = {
  className: '',
};

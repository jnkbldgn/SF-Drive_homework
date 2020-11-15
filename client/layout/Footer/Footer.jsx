import Text from 'ui/Text';
import cn from 'classnames';
import PropTypes from 'prop-types';
import SocialNetwork from './SocialNetwork';
import styles from './styles.module.scss';

export default function Footer(props) {
  const { className } = props;
  return (
    <footer
      className={cn(className, styles.root)}
    >
      <Text
        className={styles.copyright}
        size="16"
        weight="400"
        tag="span"
      >
        © SkillDrive Inc. 2020
      </Text>
      <SocialNetwork
        className={styles.socialNetwork}
      />
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

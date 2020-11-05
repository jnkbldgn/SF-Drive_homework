import Text from 'ui/Text/Text';
import cn from 'classnames';
import PropTypes from 'prop-types';
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
        weidth="400"
      >
        © SkillDrive Inc. 2020
      </Text>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

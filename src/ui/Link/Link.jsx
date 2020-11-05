import styles from 'ui/Link/styles.module';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Link(props) {
  const { href, children, className } = props;
  const classes = cn(className, styles.root);
  return (
    <a
      href={href}
      className={classes}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: '',
};

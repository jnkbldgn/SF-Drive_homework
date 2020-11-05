import PropTypes from 'prop-types';
import styles from 'ui/Image/styles.module';

export default function Image(props) {
  const { src, alt } = props;
  return (
    <img
      alt={alt}
      src={src}
      className={styles.img}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

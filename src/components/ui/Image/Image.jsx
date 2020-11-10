import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from 'ui/Image/styles.module';
import cn from 'classnames';

export default function Image(props) {
  const { name, alt, className } = props;
  const [src, setSrc] = useState();

  useEffect(() => {
    import(`images/${name}`)
      .then(({ default: filePath }) => setSrc(filePath))
      .catch(() => console.error(`Error load image ${name}`));
  }, [name]);

  return (
    <img
      alt={alt}
      src={src}
      className={cn(className, styles.img)}
    />
  );
}

Image.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Image.defaultProps = {
  className: '',
};

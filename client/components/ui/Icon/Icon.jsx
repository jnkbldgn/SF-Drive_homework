import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Icon(props) {
  const { className, name } = props;
  const [id, setId] = useState();
  const [viewBox, setViewBox] = useState();

  useEffect(() => {
    import(`icons/${name}.svg`)
      .then(({ default: icon }) => {
        setId(icon.id);
        setViewBox(icon.viewBox);
      })
      .catch(() => console.error(`Error load icon ${name}`));
  }, [name]);

  return (
    <svg
      className={className}
      viewBox={viewBox}
    >
      <use
        xlinkHref={`#${id}`}
      />
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Text(props) {
  const {
    tag, family, size, weidth, children,
  } = props;
  const sizeClass = styles[`size-${size}`];
  const familyClass = styles[`family-${family}`];
  return (
    React.createElement(
      tag,
      {
        className: [sizeClass, familyClass],
      },
      children,
    )
  );
}

const tags = [
  'span',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
];

const sizes = [
  16,
  24,
];

const families = [
  'roboto',
];

Text.propTypes = {
  tag: PropTypes.oneOf(tags),
  size: PropTypes.oneOf(sizes),
  family: PropTypes.oneOf(families),
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: tags[0],
  size: sizes[0],
  family: families[0],
  children: null,
};

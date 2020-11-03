import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Text(props) {
  const {
    tag, family, size, weight, children,
  } = props;
  const sizeClass = styles[`size-${size}`];
  const familyClass = styles[`family-${family}`];
  const weightClass = styles[`weight-${weight}`];
  return (
    React.createElement(
      tag,
      {
        className: `${sizeClass} ${familyClass} ${weightClass}`,
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

const sizesProps = styles.sizes.split(', ');
const weightsProps = styles.weights.split(', ');
const familiesProps = styles.families.split(', ');

Text.propTypes = {
  tag: PropTypes.oneOf(tags),
  size: PropTypes.oneOf(sizesProps),
  family: PropTypes.oneOf(familiesProps),
  weight: PropTypes.oneOf(weightsProps),
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: tags[0],
  size: sizesProps[0],
  family: familiesProps[0],
  weight: weightsProps[0],
  children: null,
};

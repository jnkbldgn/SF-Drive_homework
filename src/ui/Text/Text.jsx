import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

export default function Text(props) {
  const {
    tag, family, size, weight, children, className,
  } = props;
  const sizeClass = styles[`size-${size}`];
  const familyClass = styles[`family-${family}`];
  const weightClass = styles[`weight-${weight}`];
  const classes = cn(styles.root, className, sizeClass, familyClass, weightClass);
  return (
    React.createElement(
      tag,
      {
        className: classes,
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
  className: PropTypes.string,
};

Text.defaultProps = {
  tag: tags[0],
  size: sizesProps[0],
  family: familiesProps[0],
  weight: weightsProps[0],
  children: null,
  className: '',
};

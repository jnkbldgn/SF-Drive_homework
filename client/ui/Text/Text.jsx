import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import PropOfDevice from 'models/PropOfDevice';
import debounce from 'utils/debounce';
import styles from './styles.module.scss';

const isPropOfDevice = (prop) => prop instanceof PropOfDevice;

const getValuePropOfDevice = (prop) => {
  switch (true) {
    case isPropOfDevice(prop): {
      return prop.getValue();
    }
    default: {
      return prop;
    }
  }
};

const setNewValuePropOfDevice = (prop, fn) => debounce(() => fn(prop.getValue()), 1000 / 60);

export default function Text(props) {
  const {
    tag, family, size, weight, children, className,
  } = props;
  const [sizeText, setSizeText] = useState(getValuePropOfDevice(size));
  const [weightText, setWeightText] = useState(getValuePropOfDevice(weight));

  const isSizePropOfDevice = isPropOfDevice(size);
  const isWeightPropOfDevice = isPropOfDevice(weight);

  useEffect(() => {
    const changeSize = setNewValuePropOfDevice(size, setSizeText);
    const changeWeight = setNewValuePropOfDevice(weight, setWeightText);

    if (isSizePropOfDevice) {
      window.addEventListener('resize', changeSize);
    }
    if (isWeightPropOfDevice) {
      window.addEventListener('resize', changeWeight);
    }

    return () => {
      if (isSizePropOfDevice) {
        window.removeEventListener('resize', changeSize);
      }
      if (isWeightPropOfDevice) {
        window.removeEventListener('resize', changeWeight);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sizeClass = styles[`size-${sizeText}`];
  const weightClass = styles[`weight-${weightText}`];
  const familyClass = styles[`family-${family}`];
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
  'article',
];

const sizesProps = styles.sizes.split(', ');
const weightsProps = styles.weights.split(', ');
const familiesProps = styles.families.split(', ');

Text.propTypes = {
  size: PropTypes
    .oneOfType([
      PropTypes.oneOf(sizesProps),
      PropTypes.instanceOf(PropOfDevice),
    ])
    .isRequired,
  weight: PropTypes
    .oneOfType([
      PropTypes.oneOf(weightsProps),
      PropTypes.instanceOf(PropOfDevice),
    ])
    .isRequired,
  tag: PropTypes.oneOf(tags),
  family: PropTypes.oneOf(familiesProps),
  children: PropTypes.node,
  className: PropTypes.string,
};

Text.defaultProps = {
  tag: tags[0],
  family: familiesProps[0],
  children: null,
  className: '',
};

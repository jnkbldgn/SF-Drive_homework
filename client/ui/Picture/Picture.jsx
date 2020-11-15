import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { PLATFORMS, MODIFIERS, MEDIA } from './constants';

function addModifiersDesktop(name, platform) {
  return [PLATFORMS.desktop, PLATFORMS.all].includes(platform) ? `${name}${MODIFIERS.desktop}` : null;
}

function addModifiersMobile(name, platform) {
  return [PLATFORMS.mobile, PLATFORMS.all].includes(platform) ? `${name}${MODIFIERS.mobile}` : null;
}

function addRatio(name, ratio, ext) {
  if (ratio === 0) {
    return [`${name}.${ext}`];
  }
  const result = [];

  for (let i = 1; i <= +ratio; i += 1) {
    result.push(`${name}@${i}x.${ext}`);
  }
  return result;
}

function getSrcsetDesktop(name, platform, ratio, ext) {
  const srcset = addModifiersDesktop(name, platform);
  return srcset ? addRatio(srcset, ratio, ext) : null;
}

function getSrcsetMobile(name, platform, ratio, ext) {
  const srcset = addModifiersMobile(name, platform);
  return srcset ? addRatio(srcset, ratio, ext) : null;
}

function mapSrcset(item, index) {
  return `${item} ${index + 1}x`;
}

function getSrcset(arr) {
  return arr.map(mapSrcset).join(', ');
}

export default function Picture(props) {
  const {
    name, ext, alt, ratio, platform, className,
  } = props;
  const [srcsetMobile, setSrcsetMobile] = useState([]);
  const [srcsetDesktop, setSrcsetDesktop] = useState([]);

  useEffect(() => {
    const desktop = getSrcsetDesktop(name, platform, ratio, ext);
    const mobile = getSrcsetMobile(name, platform, ratio, ext);
    const desktopPromises = desktop.map((item) => import(`images/${item}`));
    const mobilePromises = mobile.map((item) => import(`images/${item}`));
    const mapResult = (item) => item.default;

    Promise.all(desktopPromises)
      .then((result) => setSrcsetDesktop(result.map(mapResult)));

    Promise.all(mobilePromises)
      .then((result) => setSrcsetMobile(result.map(mapResult)));
  },
  [name, platform, ratio, ext]);

  const sourceDesktop = srcsetDesktop ? (
    <source
      srcSet={getSrcset(srcsetDesktop)}
      media={MEDIA.desktop}
    />
  ) : null;
  const sourceMobile = srcsetMobile ? (
    <source
      srcSet={getSrcset(srcsetMobile)}
      media={MEDIA.mobile}
    />
  ) : null;

  return (
    <picture
      className={cn(className)}
    >
      {sourceMobile}
      {sourceDesktop}
      <img
        alt={alt}
        name={srcsetMobile[0] || srcsetDesktop[0]}
      />
    </picture>
  );
}

Picture.propTypes = {
  name: PropTypes.string.isRequired,
  ext: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  ratio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  platform: PropTypes.oneOf(Object.values(PLATFORMS)),
  className: PropTypes.string,
};

Picture.defaultProps = {
  ratio: 0,
  platform: PLATFORMS.NONE,
  className: '',
};

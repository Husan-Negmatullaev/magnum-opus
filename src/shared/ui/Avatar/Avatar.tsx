import React from 'react';

import { classNames } from 'shared/lib/classNames';
import classes from './Avatar.module.scss';

interface AvatarProps extends React.ComponentProps<'img'> {
    size: number,
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    className,
    alt,
    src,
    size,
  } = props;

  const sizes = React.useMemo<React.CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={sizes}
      className={classNames(classes.avatar, {}, [className])}
    />
  );
};

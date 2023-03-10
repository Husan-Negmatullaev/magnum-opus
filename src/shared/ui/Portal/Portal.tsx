import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { classNames } from 'shared/lib/classNames';
import classes from './Portal.module.scss';

interface PortalProps {
    element?: HTMLElement,
    children: ReactNode,
}

export const Portal: React.FC<PortalProps> = (props) => {
  const {
    element = document.body,
    children,
  } = props;
  return ReactDOM.createPortal(children, element);
};

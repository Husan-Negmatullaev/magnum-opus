import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
    children: ReactNode,
    container?: HTMLElement
}

export const Portal: React.FC<PortalProps> = (props) => {
  const {
    children,
    container = document.body,
  } = props;

  return ReactDOM.createPortal(children, container);
};

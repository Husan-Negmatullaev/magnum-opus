import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
    children: ReactNode,
}

export const Portal: React.FC<PortalProps> = (props) => {
  const {
    children,
  } = props;

  const rootElement = React.useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    rootElement.current = document.querySelector('#root');
    setIsMounted(true);
  }, []);

  return isMounted && rootElement.current
    ? ReactDOM.createPortal(children, rootElement.current)
    : null;
};

import React, { MutableRefObject } from 'react';

import { classNames, Mods } from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal';
import classes from './Modal.module.scss';

interface ModalProps extends React.ComponentProps<'div'> {
    isOpen?: boolean,
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 500;

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    className,
    onClose,
    isOpen,
    children,
    lazy = false,
  } = props;
  const [isClosing, setIsClosing] = React.useState<boolean>(false);
  const [isMount, setIsMount] = React.useState<boolean>(true);

  const timeRef = React.useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const closeHandler = React.useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDownHandler = React.useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDownHandler);
    }

    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDownHandler);
    };
  }, [isOpen, onKeyDownHandler]);

  React.useEffect(() => {
    if (isOpen && lazy) {
      setIsMount(false);
    }
  }, [isOpen, lazy]);

  const mods: Mods = {
    [classes.modal_open]: isOpen,
    [classes.modal_closing]: isClosing,
  };

  if (isMount && !isOpen && lazy) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(classes.modal, mods, [className])}>
        <div className={classes.modal__overlay} onClick={closeHandler}>
          <div
            className={classes.modal__content}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

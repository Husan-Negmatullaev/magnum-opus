import React from 'react';

import { classNames } from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import classes from './Modal.module.scss';

interface ModalProps extends React.ComponentProps<'div'> {
    isOpen?: boolean,
    onClose?: () => void;
}

const ANIMATION_DELAY = 500;

export const Modal: React.FC<ModalProps> = ({
  className, onClose, isOpen, children,
}) => {
  const { theme } = useTheme();
  const [isClosing, setIsClosing] = React.useState<boolean>(false);
  const timeRef = React.useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = React.useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = React.useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [classes.modal_open]: isOpen,
    [classes.modal_closing]: isClosing,
    [classes[theme]]: true,
  };

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

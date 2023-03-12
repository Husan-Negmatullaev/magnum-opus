import React from 'react';
import { Modal } from 'shared/ui/Modal';

import { classNames } from 'shared/lib/classNames';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps extends React.ComponentProps<'div'> {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;

  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('', {}, [className])}
    >
      <LoginForm />
    </Modal>
  );
};

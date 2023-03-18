import React from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = React.lazy<React.FC<LoginFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  // Для примера делаю вот так:
  setTimeout(() => resolve(import('./LoginForm')), 1500);
}));

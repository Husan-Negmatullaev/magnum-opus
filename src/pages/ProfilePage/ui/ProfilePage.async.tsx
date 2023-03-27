import React from 'react';

export const ProfilePageAsync = React.lazy<React.FC>(() => new Promise((resolve) => {
  setTimeout(() => resolve(import('./ProfilePage')), 1000);
}));

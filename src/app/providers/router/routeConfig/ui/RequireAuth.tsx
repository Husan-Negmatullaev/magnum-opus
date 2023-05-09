import React from 'react';
import { useSelector } from 'react-redux';
import { getAuthUserState } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

// interface RequireAuthProps {
//     children: React.ReactNode;
// }

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const userAuth = useSelector(getAuthUserState);
  const location = useLocation();

  if (!userAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};

import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { AppRoutesProps, routerConfig } from 'shared/config/routeConfig/routeConfig';
import { getAuthUserState } from 'entities/User';
import { RequireAuth } from 'app/providers/router/routeConfig/ui/RequireAuth';

export const AppRouter = () => {
  const isAuthedUser = useSelector(getAuthUserState);

  const renderRouteWithWrapper = React.useCallback(
    (routes: AppRoutesProps) => (
      <Route
        key={routes.path}
        path={routes.path}
        element={routes.authUser ? <RequireAuth>{routes.element}</RequireAuth> : routes.element}
      />
    ),
    [],
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {
          Object.values(routerConfig).map(renderRouteWithWrapper)
        }
      </Routes>
    </Suspense>
  );
};

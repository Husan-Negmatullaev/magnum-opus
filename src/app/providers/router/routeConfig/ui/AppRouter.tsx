import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { routerConfig } from 'shared/config/routeConfig/routeConfig';
import { getAuthUserState } from 'entities/User';

export const AppRouter = () => {
  const isAuthedUser = useSelector(getAuthUserState);

  const routes = React.useMemo(() => Object.values(routerConfig).filter((route) => {
    if (route.authUser && !isAuthedUser) {
      return false;
    }

    return true;
  }), [isAuthedUser]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

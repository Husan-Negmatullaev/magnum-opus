import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { routerConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
  <Suspense fallback="Loading...">
    <Routes>
      {
        Object.values(routerConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))
      }
    </Routes>
  </Suspense>
);

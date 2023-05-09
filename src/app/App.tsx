import React, { Suspense } from 'react';

import { Navbar } from 'widgets/Navbar';
import { SidebarLayout } from 'widgets/Sidebar';

import { AppRouter } from 'app/providers/router/routeConfig';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import { useDispatch, useSelector } from 'react-redux';
import { getUserMount, userActions } from 'entities/User';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const _mount = useSelector(getUserMount);

  React.useEffect(() => {
    dispatch(userActions.initUser());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-app">
          <SidebarLayout />
          <main>
            {_mount && <AppRouter />}
          </main>
        </div>
      </Suspense>
    </div>
  );
};

export default App;

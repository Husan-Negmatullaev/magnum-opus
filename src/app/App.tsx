import React, { Suspense } from 'react';

import { Navbar } from 'widgets/Navbar';
import { SidebarLayout } from 'widgets/Sidebar';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';

import { AppRouter } from 'app/providers/router/routeConfig';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));
    dispatch(userActions.initUser(user));
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-app">
          <SidebarLayout />
          <main>
            <BugButton />
            <AppRouter />
          </main>
        </div>
      </Suspense>
    </div>
  );
};

export default App;

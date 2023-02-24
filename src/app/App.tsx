import React, { Suspense } from 'react';

import { Navbar } from 'widgets/Navbar';
import { SidebarLayout } from 'widgets/Sidebar';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';

import { AppRouter } from 'app/providers/router/routeConfig';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import 'app/styles/index.scss';

// import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="">
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="content-app">
          <SidebarLayout />
          <main>
            <BugButton />
            <AppRouter />
          </main>
        </div>
      </div>
    </Suspense>
  );
};

export default App;

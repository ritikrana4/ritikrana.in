import React from 'react';
import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';

const  App = () : JSX.Element => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;

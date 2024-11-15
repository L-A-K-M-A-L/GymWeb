import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/Login", element: <Login /> },
    { path: "/Register", element: <Register /> },
    { path: "/UserDashboard", element: <UserDashboard /> },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // Relative splat path support
      v7_startTransition: true,    // StartTransition enabled for smooth state updates
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,     // Persist fetcher data across transitions
    },
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

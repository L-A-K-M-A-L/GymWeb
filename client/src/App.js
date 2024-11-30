import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import UserLogin from './components/userComponent/UserLogin';
import AdminLogin from './components/adminComponent/AdminLogin';
import AdminDashboard from './components/adminComponent/AdminDashboard';
import WorkoutPlan from './components/userComponent/userPages/WorkoutPlan';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddAdmin from './components/adminComponent/addminOperations/AddAdmin';
import AddUser from './components/adminComponent/addminOperations/AddUser';
import Payment from './services/Payment';
import InstructorStat from './components/userComponent/userPages/InstructorStat';

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/Login", element: <Login /> },
    { path: "/Register", element: <Register /> },
    { path: "/UserDashboard", element: <UserDashboard /> },
    { path: "/UserLogin", element: <UserLogin /> },
    { path: "/AdminLogin", element: <AdminLogin /> },
    { path: "/AdminDashboard", element: <AdminDashboard /> },
    { path: "/WorkoutPlan", element: <WorkoutPlan /> },
    { path: "/AddAdmin", element: <AddAdmin />},
    { path: "/AddUser", element: <AddUser />},
    { path: "/Payments", element: <Payment />},
    { path: "/InstructorStat", element: <InstructorStat/> },
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

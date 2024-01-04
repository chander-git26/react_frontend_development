import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';




import Mainbody from './components/pages/Mainbody';
import Protected from './components/features/auth/components/Protected';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import UserForm from './components/pages/UserForm';
import DashboardPage from './components/pages/DashboardPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import MainDashboard from './components/features/dashboard/MainDashboard';
import UserDashboard from './components/features/dashboard/userdshboard/UserDashboard';
import UserDashboardpage from './components/pages/UserDashboardpage';
import UserPersonal from './components/features/dashboard/userdshboard/userDetails/UserPersonal';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Mainbody />,
    children: [

      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/forgotpassword',
        element: <ForgotPasswordPage/>
      },

      {
        path: '/',
        element: <SignupPage />
      },
      {
        path: '/fillform',
        element:
        <Protected>

          <UserForm />
        </Protected> 
      },
      {
        path: '/dashboard',
        element:
          <Protected>
            <DashboardPage/>
          </Protected>
      },
      {
        path: '/maindashboard',
        element:
          <Protected>
            <MainDashboard/>
          </Protected>,
      },
      {
        path:'/userdashboard',
        element:
        <Protected><UserDashboardpage/></Protected>,
       
      }
    ]
  }



]);


function App() {
  return (

    <RouterProvider router={router}>

    </RouterProvider>


  );



}

export default App;

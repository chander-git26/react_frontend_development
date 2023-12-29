import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';




import Mainbody from './components/pages/Mainbody';
import Protected from './components/features/auth/components/Protected';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import UserForm from './components/pages/UserForm';
import DashboardPage from './components/pages/DashboardPage';

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

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';



import Login from './components/features/auth/components/Login';
import SignupForm from './components/features/auth/components/SignupForm';
import CompleteDetails from './components/features/dashboard/CompleteDetails';
import Dashboard from './components/features/dashboard/Dashboard';
import Mainbody from './components/Mainbody';
import Protected from './components/features/auth/components/Protected';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Mainbody />,
    children: [

      {
        path: '/login',
        element: <Login />
      },

      {
        path: '/',
        element: <SignupForm />
      },
      {
        path: '/fillform',
        element:
        <Protected>

          <CompleteDetails />
        </Protected> 
      },
      {
        path: '/dashboard',
        element:
          <Protected>
            <Dashboard />
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

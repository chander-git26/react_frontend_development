import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from './components/features/UserLogin/Login';
import Mainbody from './components/Mainbody';
import SignupForm from './components/features/SignupForm';
import { store } from './store/store';
import { Provider } from 'react-redux';
import CompleteDetails from './components/features/dashboard/CompleteDetails';
import Dashboard from './components/features/dashboard/Dashboard';


  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Mainbody/>,
          children:[
            {
              path:'login',
              element:<Login/>
            },
           
            {
              path:'/',
              element:<SignupForm/>
            },
            {
              path:'filldetailsform',
              element:<CompleteDetails/>
            },
            {
              path:'dashboard',
              element:<Dashboard/>
            }
          ]
        },
      
      ]
     
    },
  ]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

   <RouterProvider router={router}></RouterProvider>
  </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

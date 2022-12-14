import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Reviews from './routes/reviews';
import Keyboards from './routes/keyboards';
import SignIn from './routes/signin'
import ResponsiveAppBar from './components/Navbar';
import Customization from './routes/reviews';
import Signup from './routes/signup';
import AuthProvider from './context/authContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <AuthProvider>
        <App/>
      </AuthProvider>,
    children: [
      { 
        path: "/keyboards",
        element: <Keyboards />
      },
      {
        path: "reviews/:id",
        element: <Reviews />,
      },
      {
        path: "myreviews/:id",
        element: <Reviews />,
      },
    ]
  },
  {
    path: '/signin',
    element: <AuthProvider><SignIn /></AuthProvider>
  },
  {
    path: '/signup',
    element: <AuthProvider>< Signup /></AuthProvider>
  }
  
]);

root.render(
  <React.StrictMode>
 
    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

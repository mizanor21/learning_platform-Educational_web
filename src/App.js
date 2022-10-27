import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Blog from './components/Blog/Blog';
import Faq from './components/Faq/Faq';
import PrivetRoute from './components/routes/PrivetRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '/blog',
          element: <PrivetRoute><Blog></Blog></PrivetRoute>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        },
        {
          path: '/signin',
          element: <Signin></Signin>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

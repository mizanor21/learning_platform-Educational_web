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
import CourseDetails from './components/CourseDetails/CourseDetails';
import PremiumPage from './components/PremiumPage/PremiumPage';
import Error from './components/Error/Error';

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
          element: <Blog></Blog>
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
        },
        {
          path: '/details/:id',
          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) => fetch(`https://learning-web-server-mizanor21.vercel.app/details/${params.id}`)

        },
        {
          path: '/premium',
          element: <PrivetRoute><PremiumPage></PremiumPage></PrivetRoute>
        },
        {
          path: '*',
          element: <Error></Error>
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

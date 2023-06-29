import { Outlet } from "react-router-dom";
import { MainLayout } from "../components/Layout";
import About from "../pages/about/routes/about";
import Home from "../pages/home/routes/home";
import Blog from "../pages/blog/routes/blog";

const App = () => {
    return (
        <MainLayout>
          <Outlet />
        </MainLayout>
    );
  };

export const publicRoutes = [
    {
        path: '/',
        element: <App/>,
        children: [
            { path: '/', element: <div><Blog/></div> },
            { path: '/about', element: <About/> },
            { path: '/', element: <div><Home/></div> },
            { path: '*', element: <div>404</div> },
        ],
    },
];

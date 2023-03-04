import Bolgs from "../pages/Blogs/Bolgs";
import Detail from "../pages/Detail/Detail";
import About from "../pages/Home/About/About";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/Home/Home/Home");

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
                path: '/detail/:id',
                element: <Detail></Detail>,
                loader: ({ params }) => fetch(`https://my-portfolio-server-hopefyjamshed.vercel.app/projects/details/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Bolgs></Bolgs>
            },
        ]
    },
    {
        path: '/about',
        element: <About></About>
    }
])

export default router;
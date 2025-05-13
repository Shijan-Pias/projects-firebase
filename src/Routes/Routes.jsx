import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Components/Pages/Home";
import CategoryLayout from "../Components/Pages/CategoryLayout";

const router=createBrowserRouter(
    [
        {
            path:'/',
           element: <HomeLayout></HomeLayout>,
           children:[
            {
                path:"",
                Component:Home
            },
             {
                path:"/category/:id",
                Component:CategoryLayout,
                loader : ()=>fetch('/public/news.json')
            }
           ]
           
        },
        {
            path:'/news',
           element: <h2>news layout</h2>
        },
        {
            path:'/*',
           element: <h2>error404</h2>
        },
        {
            path:'/auth',
           element: <h2>authentication layout</h2>
        }

    ]
)
export default router;

import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App.jsx";
import Home from "../home/home.jsx";import Shop from "../shop/Shop.jsx";
import Aboutus from "../components/Aboutus.jsx";
import Blogs from "../components/Blogs.jsx";
import Asinglebook from "../shop/Asinglebook.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import Dashboardlayout from "../dashboard/Dashboardlayout.jsx";
import Uploadbook from "../dashboard/uploadbook.jsx";
import Managebooks from "../dashboard/Managebooks.jsx";
import Editbooks from "../dashboard/Editbooks.jsx";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";
import Privateroute from "../privateRoute/Privateroute.jsx";
import Logout from "../components/Logout.jsx";
import Help from "../components/Help.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
        path :'/',
        element : <Home/>
      },
      {
        path :'/shop',
        element : <Shop/>
      },
      {
        path :'/about',
        element : <Aboutus/>
      },
      {
        path :'/blog',
        element : <Blogs/>
      },
      {
        path :'/book/:id',
        element : <Asinglebook/>,
        loader: ({params}) =>fetch(`http://localhost:3000/book/${params.id}`)
      },
      
    ]
    },
    {
      path :'/admin/dashboard',
      element : <Privateroute><Dashboardlayout/></Privateroute>,
      children :[
          {
            path :'/admin/dashboard',
            element : <Dashboard/>
          },
          {
            path :'/admin/dashboard/upload',
            element : <Uploadbook/>
          },
          {
            path :'/admin/dashboard/manage',
            element : <Managebooks/>
          },
          {
            path :'/admin/dashboard/edit-book/:id',
            element : <Editbooks/>,
            loader: ({params}) =>fetch(`http://localhost:3000/book/${params.id}`)
          }
      ]
    },
    {
      path: "sign-up",
      element : <Signup/>
    },
    {
      path:"login",
      element : <Login/>
    },
    {
      path:'logout',
      element:<Logout/>
    },
    {
      path: 'help',
      element : <Help/>
    }
])

export default router
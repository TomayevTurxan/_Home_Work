import About from "../pages/User/About";
import Home from "../pages/User/Home";
import UserRoot from "../pages/User/UserRoot";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import Categories from "../pages/Admin/Categories";
import CategoryDetail from "../pages/Admin/CategoryDetail";
import AddCategory from "../pages/Admin/AddCategory";
import NotFound from "../pages/NotFound";
export const ROUTES = [
    {
        path: '/',
        element: <UserRoot/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminRoot/>,
        children: [
            {
                path: '',
                element: <Dashboard/>
            },
            {
                path: 'categories',
                element: <Categories/>
            },
            {
                path: 'CategoryDetail/:id',
                element: <CategoryDetail/>
            },
            {
                path: 'AddCategory',
                element: <AddCategory/>
            }
        ]
    },
    {
        path:"*",
        element: <NotFound/>
    }
]
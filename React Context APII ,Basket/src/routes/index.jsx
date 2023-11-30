import UserRoot from "../pages/UserRoot"
import Home from ".//../pages/Home"
import Products from ".//../pages/Products"
import Basket from ".//../pages/Basket"

export const ROUTES = [
    {
        path: "/",
        element: <UserRoot/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "products",
                element: <Products/>
            },
            {
                path: "basket",
                element: <Basket/>
            }
        ]
    }
]
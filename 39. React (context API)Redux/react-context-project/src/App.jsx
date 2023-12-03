import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import UserContextProvider from "./services/context/UserContext";
import CurrentUserContextProvider from "./services/context/CurrentUser";
import CategoryContextItemProvider, {
  CategoryContextItem,
} from "./services/context/Categories";

const routes = createBrowserRouter(ROUTES);

function App() {
  return (
    // <BasketContextItemProvider>

    <CategoryContextItemProvider>
      <CurrentUserContextProvider>
        <UserContextProvider>
          <RouterProvider router={routes} />
        </UserContextProvider>
      </CurrentUserContextProvider>
    </CategoryContextItemProvider>
    // </BasketContextItemProvider>
  );
}

export default App;

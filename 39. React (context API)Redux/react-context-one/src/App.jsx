import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { UserContextProvider, ModeContextProvider } from "./services/context";


function App() {

  return (
    <ModeContextProvider>
      <UserContextProvider>
          <Navbar/>
          <Home/>
      </UserContextProvider>
    </ModeContextProvider>
  );
}

export default App;

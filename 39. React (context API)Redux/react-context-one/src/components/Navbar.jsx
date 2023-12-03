import { useContext } from "react";
import { ModeContext, UserContext } from "../services/context";

const Navbar = () => {
  const{mode,setMode} = useContext(ModeContext);
  const{user,setUser} = useContext(UserContext);
  return (
    <ul style={{ border: "1px solid black", display: "flex", gap: "30px" }}>
      <li>Home</li>
      <li>About</li>
      <li>
        <button onClick={()=>{
            setMode(!mode);
        }}>change mode</button>
      </li>
      <li>
        <button onClick={()=>{
          setUser(!user);
        }}>
            {user ? "logout" : "login"}
        </button>
      </li>
      <li>current mode: {mode ? "dark" : "light"}</li>
    </ul>
  );
};

export default Navbar;

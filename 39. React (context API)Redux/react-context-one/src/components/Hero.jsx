import { useContext } from "react";
import { ModeContext, UserContext } from "../services/context";

const Hero = () => {
  const{mode} = useContext(ModeContext); 
  const{user} = useContext(UserContext);
  return (
    <>
      <h1>Lorem, ipsum dolor.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia ipsam
        asperiores possimus, vero laboriosam modi quae accusamus quaerat, cumque
        fuga quos perspiciatis delectus commodi dicta alias rerum omnis
        molestias.
      </p>
      <h3><b>Current Mode:</b> <span>{mode ? "dark" : "light"}</span></h3>
      <h3>{user? "Welcome back, user" : "Please login"}</h3>
    </>
  );
};

export default Hero;

// import { Container } from "@mui/material";
import { PropTypes } from "prop-types";


const Albums = ({ children }) => {
  console.log(children);
  return (
    <>
      {children}
    </>
  );
};

Albums.propTypes = {
  children: PropTypes.node
};

export default Albums;

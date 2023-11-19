import { useState } from "react";
import { PropTypes } from "prop-types";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Hamburger from "./Hamburger";
import Modal from '@mui/material/Modal';
import Login from "./Login"
import Register from "./Register";
// import Register from "./Register"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function ButtonAppBar({setUser}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };



  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Albom Layout
          </Typography>
          <Button color="inherit" onClick={handleOpen}>Login</Button>
          <Button color="inherit" onClick={handleOpen2}>Register</Button>
          {/* <h4>LogOut</h4> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
             <Login setUser={setUser} open={open}
            onClose={handleClose}/>
            </Box>
          </Modal>
          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
             <Register setUser={setUser} open={open2}
            onClose={handleClose2}/>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
      
      <Hamburger open={isDrawerOpen} onClose={handleDrawerClose} />
    </Box>
  );
}
ButtonAppBar.propTypes = {
  setUser: PropTypes.func
};
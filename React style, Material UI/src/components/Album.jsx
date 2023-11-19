import { useState } from "react";
import { Container } from "@mui/material";
import { PropTypes } from "prop-types";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Edit from "./Edit"
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
const Album = ({albom,setAlboms}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
     <Card sx={{ maxWidth: 350,margin:"0 auto" }}>
        <CardMedia
          component="img"
          alt={albom.name}
          height="200"
          image={albom.albumCover}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {albom.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {albom.artistName}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {albom.genre}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {albom.year}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small" onClick={()=>{
            handleOpen()
          }}>Edit</Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Edit albom={albom} setAlboms={setAlboms}/>
        </Box>
      </Modal>
    </>
  );
};

Album.propTypes = {
  albom: PropTypes.object,
  setAlboms: PropTypes.object,
  isAdmin: PropTypes.bool,
  setWhishlist: PropTypes.func,
  whishList: PropTypes.array,
};

export default Album;

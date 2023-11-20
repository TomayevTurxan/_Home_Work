import { useState } from "react";
import { PropTypes } from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Edit from "./Edit";
import Comment from "./Comment";
import Rating from "@mui/material/Rating";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Album = ({ albom, setAlboms, alboms, user }) => {
  const [open, setOpen] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);


  return (
    <>
      {user ? (
        <>
          <Card sx={{ maxWidth: 350, margin: "0 auto" }}>
            <CardMedia
              component="img"
              alt={albom.albumName}
              height="200"
              image={albom.albumCover}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name:{albom.albumName}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                ArtistName:{albom.artistName}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Genre:{albom.genre}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Year:{albom.year}
              </Typography>
              {albom.comment ? (
                <>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Comment: {albom.comment}
                  </Typography>
                  <Rating name="read-only" value={albom.rate} readOnly />
                </>
              ) : (
                <Typography variant="body2" color="textSecondary" component="p">
                  No comment on this album
                </Typography>
              )}
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
              <Button size="small" onClick={handleOpen}>
                Edit
              </Button>
              <Button size="small" onClick={handleOpen3}>
                Comment
              </Button>
            </CardActions>
          </Card>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Edit
                albom={albom}
                alboms={alboms}
                setAlboms={setAlboms}
                handleClose={handleClose}
              />
            </Box>
          </Modal>
          <Modal
            open={open3}
            onClose3={handleClose3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Comment
                handleClose3={handleClose3}
                albom={albom}
                alboms={alboms}
                setAlboms={setAlboms}
              />
            </Box>
          </Modal>
        </>
      ) : (
        <>
          <Card sx={{ maxWidth: 350, margin: "0 auto" }}>
            <CardMedia
              component="img"
              alt={albom.albumName}
              height="200"
              image={albom.albumCover}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {albom.albumName}
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
              <Button size="small" onClick={handleOpen}>
                Edit
              </Button>
            </CardActions>
          </Card>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Edit
                albom={albom}
                alboms={alboms}
                setAlboms={setAlboms}
                handleClose={handleClose}
              />
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};

Album.propTypes = {
  albom: PropTypes.object,
  setAlboms: PropTypes.object,
  isAdmin: PropTypes.bool,
  setWhishlist: PropTypes.func,
  whishList: PropTypes.array,
  alboms: PropTypes.array,
};

export default Album;
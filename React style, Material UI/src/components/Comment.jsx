import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { putAlbomsByID } from "../api/albums";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Comment = ({ albom, handleClose3 }) => {
  const [comment, setComment] = useState("");
  const [rate, setRating] = useState("");
  const [value, setValue] = React.useState(2);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <InputLabel htmlFor="comment-input">Yorumunu yaz:</InputLabel>
      <Input
        id="comment-input"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        x
      />
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event,newValue) => {
            console.log(newValue);
            setValue(newValue);
            setRating(newValue);
          }}
        />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
      <Button
        onClick={() => {
          handleClick();
          putAlbomsByID(albom.id, { comment, rate });
        }}
        variant="contained"
        color="primary"
        fullWidth
      >
        Created
      </Button>
      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Button
        onClick={() => {
          handleClose3();
        }}
        variant="contained"
        color="primary"
        fullWidth
      >
        Close
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Comment elave olundu"
        action={action}
      />
      ;
    </div>
  );
};
export default Comment;

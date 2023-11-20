import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { putAlbomsByID } from "../api/albums";

const Comment = ({ albom, handleClose3 }) => {
  const [comment, setComment] = useState("");
  const [rate, setRating] = useState("");
  const [value, setValue] = React.useState(2);

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
          onChange={(event, newValue) => {
            setValue(newValue);
            setRating(newValue);
          }}
        />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
      <Button
        onClick={() => {
          putAlbomsByID(albom.id, { comment, rate });
        }}
        variant="contained"
        color="primary"
        fullWidth
      >
        Created
      </Button>
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
    </div>
  );
};

export default Comment;

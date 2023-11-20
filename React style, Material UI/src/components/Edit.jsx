import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { PropTypes } from "prop-types";
import { putAlbomsByID } from "../api/albums";

const Edit = ({ albom, setAlboms ,alboms, handleClose}) => {
  let [updatingPro, setUpdatingPro] = useState({
    albumName: albom.albumName,
    artistName: albom.artistName,
    year: albom.year,
    albumCover: albom.albumCover,
    genre: albom.genre,
  });
  return (
    <>
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <form onSubmit={(e)=>{
                e.preventDefault()
                putAlbomsByID(albom.id, updatingPro)
                console.log(putAlbomsByID);
                let currentUpdating = alboms.find((x)=>x.id===albom.id);
                currentUpdating.albumName = updatingPro.albumName
                currentUpdating.artistName = updatingPro.artistName
                currentUpdating.year = updatingPro.year
                currentUpdating.genre = updatingPro.genre
                currentUpdating.albumCover = updatingPro.albumCover
                setAlboms([...alboms])
                handleClose()
              }}>
                <h1>Edit form</h1>
                <Input
                  value={updatingPro.name}
                  onChange={(e) => {
                    setUpdatingPro({ ...updatingPro, name: e.target.value });
                  }}
                />
                <Input
                  value={updatingPro.artistName}
                  onChange={(e) => {
                    setUpdatingPro({ ...updatingPro, artistName: e.target.value });
                  }}
                />
                <Input
                  value={updatingPro.year}
                  onChange={(e) => {
                    setUpdatingPro({ ...updatingPro, year: e.target.value });
                  }}
                />
                <Input
                  value={updatingPro.genre}
                  onChange={(e) => {
                    setUpdatingPro({ ...updatingPro, genre: e.target.value });
                  }}
                />

                <Button variant="contained" color="primary" fullWidth type="submit">
                  Save Changes
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

Edit.propTypes = {
  albom: PropTypes.shape({
    albumName: PropTypes.string,
    artistName: PropTypes.string,
    albumCover: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string,
    id: PropTypes.string,
  }),
  setAlboms: PropTypes.func,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  alboms: PropTypes.array,
};

export default Edit;

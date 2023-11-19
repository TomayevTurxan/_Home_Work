import { Container, Grid } from "@mui/material";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { PropTypes } from "prop-types";

const Edit = ({ albom, setAlboms }) => {
  return (
    <>
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <form >
                <h1>Edit form</h1>
                <Input
                  value={albom.name}
                  onChange={(e) => {
                    setAlboms({ ...albom, name: e.target.value });
                  }}
                />
                <Input
                  value={albom.artistName}
                  onChange={(e) => {
                    setAlboms({ ...albom, artistName: e.target.value });
                  }}
                />
                <Input
                  value={albom.year}
                  onChange={(e) => {
                    setAlboms({ ...albom, year: e.target.value });
                  }}
                />
                <Input
                  value={albom.genre}
                  onChange={(e) => {
                    setAlboms({ ...albom, genre: e.target.value });
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
    name: PropTypes.string,
    artistName: PropTypes.string,
    year: PropTypes.string,
    genre: PropTypes.string,
  }),
  setAlboms: PropTypes.func,
};

export default Edit;

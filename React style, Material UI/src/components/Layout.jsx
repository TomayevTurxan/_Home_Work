import { Button, Container } from "@mui/material";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";



const Layout = () => {
  return (
    <>
      <Box className="head" sx={{ flexGrow: 1 }}>
        <Grid className="albomHead" container spacing={2}>
          <Grid className="albom" item xs={5}>
            <h1>Album layout</h1>
            <p>
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks dont simply skip over it entirely.
            </p>
            <Grid>
              <Button className="call" variant="contained">
                Main Call to Action
              </Button>
              <Button variant="outlined">
                Secondary Action
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Layout;

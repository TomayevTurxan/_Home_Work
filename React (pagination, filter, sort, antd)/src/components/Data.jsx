import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Card,
  CardMedia,
  Grid,
  Box,
  Typography,
  Container,
  Link,
  Input,
  CircularProgress,
  Pagination,
  Stack,
  Select,
  MenuItem,
  Slider,
} from "@mui/material";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Data() {
  const [search, setSearch] = useState("");
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [abvValue, setAbvValue] = useState(50);
  const [selectedBeer, setSelectedBeer] = useState(null);
  const itemsPerPage = 10;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.punkapi.com/v2/beers`);

        if (!response.ok) {
          throw new Error("Failed to fetch data!");
        }

        const data = await response.json();
        setBeers(data);
        setPages(Math.ceil(data.length / itemsPerPage));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // console.log(startIndex);
    // console.log(endIndex);
    // console.log(currentPage);
    return beers.slice(startIndex, endIndex);
  };

  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = (beer) => {
    setSelectedBeer(beer);
  };

  const handleClose = () => {
    setSelectedBeer(null);
  };
  return (
    <ThemeProvider theme={createTheme()}>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Search for beer"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              onClick={() => {
                setLoading(true);
                fetch(`https://api.punkapi.com/v2/beers?beer_name=${search}`)
                  .then((res) => {
                    if (!res.ok) {
                      throw new Error("Failed to fetch data!");
                    }
                    return res.json();
                  })
                  .then((data) => {
                    setBeers(data);
                    setPages(Math.ceil(data.length / itemsPerPage));
                  })
                  .catch((err) => setError(err))
                  .finally(() => setLoading(false));

                setCurrentPage(1);
                setSearch("");
              }}
              variant="outlined"
            >
              Search
            </Button>
            <Box
              style={{
                width: "40%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>Spirt</p>
              <Slider
                value={abvValue}
                onChange={(e, newValue) => setAbvValue(newValue)}
                aria-label="Default"
                valueLabelDisplay="auto"
              />

              <Button
                variant="contained"
                style={{ marginLeft: "25px" }}
                onClick={() => {
                  setLoading(true);
                  fetch(`https://api.punkapi.com/v2/beers?abv_gt=${abvValue}`)
                    .then((res) => {
                      if (!res.ok) {
                        throw new Error("Failed to fetch data!");
                      }
                      return res.json();
                    })
                    .then((data) => {
                      setBeers(data);
                      setPages(Math.ceil(data.length / itemsPerPage));
                    })
                    .catch((err) => setError(err))
                    .finally(() => setLoading(false));

                  setCurrentPage(1);
                  setSearch("");
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>

          <Grid container spacing={4}>
            {loading ? (
              <CircularProgress sx={{ margin: "0 auto", display: "block" }} />
            ) : error ? (
              <Typography
                sx={{ margin: "20px 0px", display: "block" }}
                variant="body1"
                color="error"
              >
                Error: {error.message}
              </Typography>
            ) : (
              getPaginatedData().map((beer) => (
                <Grid item key={beer.id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                      image={beer.image_url}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                         style={{ cursor: "pointer" }}
                         onClick={() => handleOpen(beer)} 
                         gutterBottom
                         variant="h5"
                         component="h2"
                      >
                        {beer.name}
                      </Typography>
                      <Modal
                          style={{ backgroundColor: "grey", opacity: "0.3" }}
                          open={selectedBeer !== null}
                          onClose={handleClose}
                          aria-labelledby="child-modal-title"
                          aria-describedby="child-modal-description"
                      >
                        <Box sx={{ ...style, width: 400 }}>
                          {selectedBeer && (
                            <div key={selectedBeer.id}>
                              <p>ID: {selectedBeer.id}</p>
                              <p>Name: {selectedBeer.name}</p>
                              <p>Tagline: {selectedBeer.food_pairing}</p>
                            </div>
                          )}
                        </Box>
                      </Modal>
                      <Typography>Abv:{beer.abv}</Typography>
                    </Box>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
          {beers && beers.length > itemsPerPage && (
            <div
              style={{
                margin: "50px 0px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Pagination
                onChange={(e, page) => setCurrentPage(page)}
                count={pages}
                page={currentPage}
                shape="rounded"
              />
              <Select value={itemsPerPage}>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </div>
          )}
        </Container>
      </main>
    
    </ThemeProvider>
  );
}

export default Data;

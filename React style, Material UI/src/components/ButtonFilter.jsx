import React, { useState } from "react";
import { Input, Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { PropTypes } from "prop-types";

const ButtonFilter = ({ alboms, setAlboms }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleSearch = (query) => {
    const filterSearch = query.toLowerCase().trim();
    const updatedAlboms =
      query === ""
        ? alboms
        : alboms.filter((albom) =>
            albom.name.toLowerCase().trim().includes(filterSearch)
          );

    setAlboms(updatedAlboms);
  };

  const handleFilterByGenre = (selectedGenre) => {
    const updatedAlboms =
      selectedGenre === ""
        ? alboms
        : alboms.filter((albom) => albom.genre.toLowerCase() === selectedGenre.toLowerCase());

    setAlboms(updatedAlboms);
  };

  const genreOptions = ["Rock", "Pop", "Jazz", "Hip Hop", "Electronic"]; 

  return (
    <>
      <Container style={{ marginTop: 20 }}>
        <Box>
          <Grid>
            <Input
              placeholder="Search"
              style={{ width: 200, marginRight: 16 }}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleSearch(e.target.value);
              }}
            />
            <Select
              value={selectedGenre}
              onChange={(e) => {
                setSelectedGenre(e.target.value);
                handleFilterByGenre(e.target.value);
              }}
              style={{ width: 120 }}
            >
              {genreOptions.map((genre, index) => (
                <MenuItem key={index} value={genre}>
                  {genre || "All Genres"}
                </MenuItem>
              ))}
            </Select>
            <Button
              onClick={() => {
                let filterAge = alboms.sort((a, b) => a.year - b.year);
                setAlboms([...filterAge]);
              }}
            >
              Sort by Year
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

ButtonFilter.propTypes = {
  alboms: PropTypes.array,
  setAlboms: PropTypes.func,
};

export default ButtonFilter;

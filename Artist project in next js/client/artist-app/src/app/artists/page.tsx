"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import getArtists from "../libs/getArtists";
import { Artist } from "../types/artists";
import Link from "next/link";

export default function Authors() {
  const [artists, setArtists] = React.useState<Artist[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [gender, setGender] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  console.log("artist", artists);
  React.useEffect(() => {
    const fetchArtists = async () => {
      const allArtists = await getArtists();
      let filteredArtists = allArtists.filter((artist) =>
        artist.name.toLowerCase().includes(search.toLowerCase())
      );
      if (gender === "male") {
        filteredArtists = filteredArtists.filter(
          (artist) => artist.gender === "male"
        );
      } else if (gender === "female") {
        filteredArtists = filteredArtists.filter(
          (artist) => artist.gender === "female"
        );
      }
      setArtists(filteredArtists);
    };
    fetchArtists();
  }, [search, gender]);

  const handleDelete = async (artistID: string) => {
    await fetch(`http://localhost:4040/artists/${artistID}`, {
      method: "DELETE",
    });
    setArtists((prevArtists) =>
      prevArtists.filter((artist) => artist._id !== artistID)
    );
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "40%",
        }}
      >
        <TextField
          style={{
            margin: "30px 0px",
            marginRight: "20px",
          }}
          id="outlined-search"
          label="Search Author"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={2}>
        {artists.map((artist) => (
          <Grid item key={artist._id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 340 }} image={artist.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 <Link href={`/artists/${artist._id}`}>
                 <Typography>{artist.name}</Typography>
                 </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Age: {artist.age}
                  <br />
                  Genre: {artist.genre}
                  <br />
                  Gender: {artist.gender}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => handleDelete(artist._id as string)}
                  variant="outlined"
                  color="error"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

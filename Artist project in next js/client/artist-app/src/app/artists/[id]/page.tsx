"use client";
import React, { useEffect, useState } from "react";
import { Artist } from "@/app/types/artists";
import getArtist from "@/app/libs/getArtist";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const ArtistPage = ({ params }: { params: { id: string } }) => {
  const [artistData, setArtistData] = useState<Artist>();
  console.log("id", params.id);
  useEffect(() => {
    const fetchArtistData = async () => {
      const artist = await getArtist(params.id);
      setArtistData(artist);
    };
    fetchArtistData();
  }, [params.id]);

  return (
    <div>
      {artistData ? (
        <>
          <Grid item key={artistData._id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 340 }} image={artistData.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <Typography>{artistData.name}</Typography>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Age: {artistData.age}
                  <br />
                  Genre: {artistData.genre}
                  <br />
                  Gender: {artistData.gender}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArtistPage;

import { Artist } from "../types/artists";

const getArtist = async (_id: string | number): Promise<Artist> => {
  const response = await fetch(`http://localhost:4040/artists/${_id}`);
  console.log("response",response);
  if (!response.ok) {
    throw new Error("Failed to fetch artist");
  }

  const artist: Artist = await response.json();
  return artist;
};

export default getArtist;

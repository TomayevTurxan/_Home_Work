import { Artist } from "../types/artists";

const getArtists = async (search: string = ""): Promise<Artist[]> => {
  const response = await fetch("http://localhost:4040/artists");
  console.log("response", response);
  if (!response.ok) {
    throw new Error("Failed to fetch artists");
  }

  return await response.json();
};

export default getArtists;

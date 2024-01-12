const express = require("express");
const app = express();
require('dotenv').config()
const crypto = require("crypto");
const cors = require('cors')
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors())
const PORT = process.env.PORT 

// let fakeData = [
//   {
//     id: 1,
//     name: "Kenya",
//     age: "26",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     genre: "pop",
//     gender: "male",
//   },
//   {
//     id: 2,
//     name: "Simon",
//     age: "26",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     genre: "pop",
//     gender: "male",
//   },
//   {
//     id: 3,
//     name: "Filankes",
//     age: "26",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     genre: "pop",
//     gender: "male",
//   },
//   {
//     id: 4,
//     name: "Obama",
//     age: "26",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     genre: "pop",
//     gender: "male",
//   },
//   {
//     id: 5,
//     name: "Trump",
//     age: "26",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     genre: "pop",
//     gender: "male",
//   },
// ];

//Schema
const ArtistSchema = new Schema({
    name: String,
    age: Number,
    image: String,
    genre: String,
    gender: String
})

//model
const ArtistModel = mongoose.model('Artist',ArtistSchema)


app.get("/artists", async(req, res) => {
  const{name} =  req.query
  const artists = await ArtistModel.find({})
  
  if (name) {
    const filteredArtist = artists.filter((x)=> x.name.toLowerCase().trim().includes(name.toLowerCase().trim()))
    res.send(filteredArtist)
  }else{
    res.send(artists)
  }
});

//get by id
app.get("/artists/:id", async(req, res) => {
  const { id } = req.params;
  const data = await ArtistModel.findById(id)
  if (data !== undefined) {
    res.status(200).send(data);
  } else {
    res.status(204).send({
      message: "data not found",
    });
  }
});

//delete
app.delete("/artists/:id", async(req, res) => {
  const { id } = req.params;
   await ArtistModel.findByIdAndDelete(id);
  const artists  = await ArtistModel.find({})
  res.send(artists)
});

//patch
app.patch("/artists/:id", async(req, res) => {
  const { id } = req.params;
  await ArtistModel.findByIdAndUpdate(id,req.body)
  const updatedArtist = await ArtistModel.find({})
  res.send(updatedArtist)
});

//post
app.post("/artists", async(req, res) => {
  const newArtist = new ArtistModel(req.body)
  await newArtist.save()
  res.send(newArtist)
  // const { name, age, image, genre, gender } = req.body;
  // const newArtist = {
  //   id: crypto.randomUUID(),
  //   name: name,
  //   age: age,
  //   image: image,
  //   genre: genre,
  //   gender: gender,
  // };
  // fakeData.push(newArtist);
  // res.send({
  //   message: "data posted succesfully",
  //   data: newArtist,
  // });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

mongoose
  .connect(
    process.env.DB_CONNECTION_KEY.replace('<password>',process.env.DB_PASSWORD)
 )
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

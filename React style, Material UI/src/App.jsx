/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Album from "./components/Album.jsx";
import Albums from "./components/Albums.jsx";
import AddAlbum from "./components/AddAlbum.jsx";
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx";
import UserL from "./components/UserL.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import { getAllAlboms } from "./api/albums/index.js";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";

import "./App.css";
import Layout from "./components/Layout.jsx";
function App() {
  let [alboms, setAlboms] = useState([]);
  let [whishList, setWhishList] = useState();
  let [user, setUser] = useState(null);

  if (JSON.parse(localStorage.getItem("whishList"))) {
    setWhishList(JSON.parse(localStorage.getItem("whishList")));
  }

  if (JSON.parse(localStorage.getItem("user"))) {
    setUser(JSON.parse(localStorage.getItem("user")));
  }

  useEffect(() => {
    getAllAlboms().then((res) => {
      console.log(res);
      setAlboms(res);
    });
  }, []);

  return (
    <>
      <Navbar setUser={setUser} />
      {user ? (
        <>
          <UserL user={user} />
          <AddAlbum />
          <Albums>
            <Box>
              <Grid container spacing={3}>
                {alboms &&
                  alboms.map((albom, idx) => {
                    return (
                      <Grid key={idx} item xs={12} md={6} lg={4}>
                        <Album
                          setWhishList={setWhishList}
                          whishList={whishList}
                          isAdmin={user?.isAdmin}
                          albom={albom}
                          alboms={alboms}
                          key={idx}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          </Albums>
          {/* <h4>LogOut</h4> */}
          <Logout setUser={setUser}></Logout>
        </>
      ) : (
        <>
          <Layout></Layout>
          <Albums>
            <Box>
              <Grid container spacing={3}>
                {alboms &&
                  alboms.map((albom, idx) => {
                    return (
                      <Grid key={idx} item xs={12} md={6} lg={4}>
                        <Album
                          setWhishList={setWhishList}
                          whishList={whishList}
                          isAdmin={user?.isAdmin}
                          albom={albom}
                          alboms={alboms}
                          key={idx}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          </Albums>
          {/* <Login setUser={setUser} /> */}
          {/* <Login setUser={setUser}/> */}
          {/* <Register setUser={setUser} /> */}
        </>
      )}
    </>
  );
}

export default App;

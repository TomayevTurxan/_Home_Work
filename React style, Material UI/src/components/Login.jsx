import { useState } from "react";
import { PropTypes } from "prop-types";
import { getAllUsers } from "../api/users";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
// import TextField from '@mui/material/TextField';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Login = ({ setUser }) => {
  let [currentUser, setCurrentUser] = useState({ name: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    getAllUsers().then((res) => {
      let found = res.find(
        (x) =>
          x.name === currentUser.name && x.password === currentUser.password
      );

      if (found) {
        setUser(found);
        // localStorage.setItem('user',JSON.stringify({id: found.id, isAdmin: found.isAdmin})) loopa girir duzelde bilmedim hec cur
      } else {
        window.alert("Bele bir istifadeci yoxdur");
      }
    });
  };

  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <form id="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <h1 className="headTitle">Login</h1>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <input
                      className="inputs"
                      value={currentUser.name}
                      onChange={(e) =>
                        setCurrentUser({ ...currentUser, name: e.target.value })
                      }
                      placeholder="enter name"
                      type="text"
                    />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <input
                      className="inputs"
                      value={currentUser.password}
                      onChange={(e) =>
                        setCurrentUser({
                          ...currentUser,
                          password: e.target.value,
                        })
                      }
                      placeholder="enter password"
                      type="password"
                    />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Item>
                          <button className="buttonInput" type="submit">
                            Login
                          </button>
                        </Item>
                      </Grid>
                      <Grid item xs={6}>
                        <Item>
                          <button
                            className="buttonInput"
                            onClick={() => {
                              setCurrentUser({ name: "", password: "" });
                            }}
                            type="reset"
                          >
                            Cancel
                          </button>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

Login.propTypes = {
  setUser: PropTypes.func,
};

export default Login;

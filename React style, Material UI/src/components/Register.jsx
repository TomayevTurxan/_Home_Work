import { useState } from "react";
import { postUsers } from "../api/users";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Register = () => {
  let [newUser, setNewUser] = useState({
    name: "",
    password: "",
    email: "",
    isAdmin: false,
  });
  
  return (
    <>
      {/* <form
        onSubmit={async (e) => {
          e.preventDefault();
          setShow(false);
          postUsers(newUser);
        }}
      >
        <input
          onChange={(e) => {
            setNewUser({ ...newUser, name: e.target.value });
          }}
          placeholder="enter name"
          type="text"
        />
        <input
          onChange={(e) => {
            setNewUser({ ...newUser, email: e.target.value });
          }}
          placeholder="enter email"
          type="email"
        />
        <input
          onChange={(e) => {
            setNewUser({ ...newUser, password: e.target.value });
          }}
          placeholder="enter password"
          type="password"
        />
        <div>
          <label htmlFor="isAdmin">Is Admin?</label>
          <input
            onChange={(e) => {
              setNewUser({ ...newUser, isAdmin: e.target.checked });
            }}
            id="isAdmin"
            type="checkbox"
          />
        </div>
        <button type="submit">Submit</button>
        <button
          onClick={() => {
            setShow(false);
          }}
          type="reset"
        >
          Cancel
        </button>
      </form> */}

      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <form
                id="form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  postUsers(newUser);
                }}
              >
                <Grid container spacing={2}>
                  <Grid item md={12}>
                    <h1 className="headTitle">Register</h1>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <input
                        onChange={(e) => {
                          setNewUser({ ...newUser, name: e.target.value });
                        }}
                        placeholder="enter name"
                        type="text"
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <input
                        onChange={(e) => {
                          setNewUser({ ...newUser, email: e.target.value });
                        }}
                        placeholder="enter email"
                        type="email"
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <input
                        onChange={(e) => {
                          setNewUser({ ...newUser, password: e.target.value });
                        }}
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
                              Submit
                            </button>
                          </Item>
                        </Grid>
                        <Grid item xs={6}>
                          <Item>
                            <button
                              className="buttonInput"
                              onClick={() => {
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
    </>
  );
};

export default Register;

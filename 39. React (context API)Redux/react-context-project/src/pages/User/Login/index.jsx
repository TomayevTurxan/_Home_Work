import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../services/context/UserContext";
import BASE_URL from "../../../services/api/BASE_URL";
import { CurrentUserContex } from "../../../services/context/CurrentUser";
import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const Login = () => {
  const { users, setUsers } = useContext(UserContext);
  const {user,setUser} = useContext(CurrentUserContex)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    fetch(BASE_URL + `/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  // console.log(users);

  const handLeLogin = () => {
    const foundUser = users.find(
      (user) =>
      user.username === name && user.password === password 
      );
      if (foundUser) {
        setUser(foundUser)
        alert("XOS GELDINIZ " + foundUser.username);
    } else {
      setUsers(null)
      alert("BELE BIR ISTTIFADECI YOXDUR.");
    }
  };
  console.log("current",user)
  // console.log("name",name)
  // console.log("password",password)
  const defaultTheme = createTheme();
  return (
    <>
      {/* <form onSubmit={(e)=>{
        e.preventDefault()
        handLeLogin()
        setName("")
        setPassword("")
      }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />
        <label htmlFor="isAdmin">IsAdmin</label>
        <input
          type="checkbox"
          id="isAdmin"
          name="isAdmin"
          placeholder="isAdmin"
        />
        <button>Login</button>
      </form> */}



      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={(e)=>{
            e.preventDefault()
            handLeLogin()
            setName("")
            setPassword("")
          }} noValidate sx={{ mt: 1 }}>
            <TextField
             value={name}
             onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </>
  );
};

export default Login;






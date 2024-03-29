import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Service from "../Service";
import { useState } from "react";
import Container from "@mui/material/Container";
import {orange,teal} from '@mui/material/colors';
import Alert from '@mui/material/Alert';

export default function Register() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("email@gmail.com");
  const [password, setPassword] = useState("123456");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Service.register(userName,email, password);
    navigate("/link", { replace: true });
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: orange[300] }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="user name"
            name="name"
            autoComplete="name"
            
            //helperText={"שם משתמש ברירת מחדל: email@gmail.com"}
            onChange={(event) => setUserName(event.target.value)}
          />
          {/* <Alert variant="outlined" severity="error">
            This is an error alert — check it out!
           </Alert> */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="email address"
            name="email"
            autoComplete="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 , bgcolor:teal[300]}}
          >
            register
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2" color={teal[300]}>
                {"Don't have an account yet? to connect"} 
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginValidation from "../validation/LoginValidation";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Navbar from "./Navbar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Login() {
  const navigate = useNavigate();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginValidation) });

  const onSubmit = handleSubmit(async(data) => {
    // alert(JSON.stringify(data));
    const {status} = await axios.post("user/user_login", data)

    if(status == 200){
      navigate("/transaction")
    }
  });

  return (
    <>
      <Navbar />
      
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "cyan" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box>
          <form onSubmit={onSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              name="username"
              autoFocus
              {...register("username")}
              
            />
            {errors.username ? errors.uername.message : ""}

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              
              {...register("password")}
              
            />
            {errors.password ? errors.password.message : ""}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "cyan" }}>
              Login
            </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
}

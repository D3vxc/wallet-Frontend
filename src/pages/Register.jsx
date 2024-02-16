import { zodResolver } from "@hookform/resolvers/zod";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import RegisterValidation from "../validation/RegisterValidation";
import Navbar from "./Navbar";

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(RegisterValidation) });

  const onSubmitted = handleSubmit(async (data) => {
    console.log("-------", data);
    const { status } = await axios.post("user/add_user", data);
    console.log("-------", data);
    if (status == 200) {
      console.log("-------", data);
      console.log("Username and Password is empty");
      navigate("/login");
    }
  });
  console.log("errors", errors);
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
          <Avatar sx={{ m: 1, bgcolor: "black" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box>
            <form onSubmit={onSubmitted}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    {...register("firstname")}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    {...register("lastname")}
                  />
                </Grid>
              </Grid>
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
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                label="Email"
                {...register("email")}
              />
              {errors.email ? errors.email.message : ""}
              <TextField
                margin="normal"
                required
                fullWidth
                type="date"
                {...register("dob")}
              />
              {errors.dob ? errors.dob.message : ""}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "black" }}
              >
                Register
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
}

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextField from "@mui/material/TextField";
// import { Button } from "@mui/material";
// import { Container } from "@mui/system";
// import { zodResolver } from "@hookform/resolvers/zod";
// import RegisterValidation from "../validation/RegisterValidation";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// export default function UserRegister() {
//     const navigate = useNavigate();
//     const [firstname, setfirstname] = useState();
//     const [lastname, setlastname] = useState();
//     const [username, setusername] = useState();
//     const [email, setEmail] = useState();
//     const [password, setpassword] = useState();
//     const [dob, setdob] = useState();
//     const {
//         formState: { errors },
//     } = useForm({ resolver: zodResolver(RegisterValidation) });

//     const UserSubmit = async () => {
//         await axios
//             .post("user/add_user", {
//                 firstname: firstname,
//                 lastname: lastname,
//                 username: username,
//                 password: password,
//                 email: email,
//                 dob: dob,
//             })
//             .then((res) => {
//                 console.log(res.data);
//                 if (!firstname || !lastname || !username || !password || !email) {
//                     console.log("empty data inserted");
//                 }
//                 else {
//                     navigate("/login")
//                 }
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };
//     return (
//         <Container
//             maxwidth="sm"
//             sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 textAlign: "center",

//             }}
//         >
//             <form sx={{
//                 padding: "10px",
//                 margin: "10px",
//             }}>
//                 <TextField
//                     required
//                     label="firstname"
//                     value={firstname}
//                     onChange={(e) => setfirstname(e.target.value)}
//                 />
//                 {errors.firstname?.message}
//                 <br /> <br />

//                 <TextField
//                     required
//                     label="lastname"
//                     value={lastname}
//                     onChange={(e) => setlastname(e.target.value)}
//                 />

//                 {errors.lastname?.message}
//                 <br /> <br />

//                 <TextField
//                     required
//                     label="username"
//                     value={username}
//                     onChange={(e) => setusername(e.target.value)}
//                 />
//                 {errors.username?.message}
//                 <br /> <br />

//                 <TextField
//                     required
//                     label="email"
//                     autoComplete="email"
//                     value={email} onChange={(e) => setEmail(e.target.value)}
//                 />
//                 {errors.email?.message}
//                 <br /> <br />
//                 <TextField
//                     required
//                     label="password"
//                     type="password"
//                     value={password} onChange={(e) => setpassword(e.target.value)}
//                 />
//                 {errors.password?.message}
//                 <br /><br />
//                 <TextField
//                     required
//                     // label="password"
//                     type="date"
//                     value={dob} onChange={(e) => setdob(e.target.value)}
//                 />
//                 {errors.dob?.message}
//                 <br /><br />

//                 <Button onClick={() => {
//                     UserSubmit()
//                 }} size="medium"> Submit </Button>
//             </form>
//         </Container>
//     );
// }

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="absolute">
        <Toolbar sx={{background: "white"}}>
          <img
            src="./assest/logo/wallet.png"
            alt="logo"
            style={{ height: "55px", width: "70px"}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
            Wallet :)
          </Typography>
          <Link to = "/register">
          <Button color="inherit" sx={{background: "white"}}>Register</Button>
          </Link>
          <Link to = "/login">
          <Button color="inherit" sx={{background: "black"}} >Login</Button>
          </Link>

        </Toolbar>

      </AppBar>
    </Box>

    // <Box sx={{ flexGrow: 1 }}>
    //    <Toolbar sx={{background: "white"}}>

    // <div className="landing">
    //   <div className="light-overlay landing-inner text-dark">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-12 text-center">
    //           <h1 className="display-3 mb-4">Wallet APAY</h1>
    //           <p className="lead">Create your account</p>
    //           <hr />
    //           <Link to="/register">
    //             <Button color="inherit" sx={{ background: "white" }}>
    //               Register
    //             </Button>
    //           </Link>
    //           <Link to="/login">
    //             <Button color="inherit" sx={{ background: "black" }}>
    //               Login
    //             </Button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //    </Toolbar>
    // </Box>
  );
}

import React from 'react';
import { Container } from '@mui/system';
import {Outlet} from "react-router-dom";
import Navbar from './Navbar';

export default function Home() {
  return (
    <Container maxwidth = "sm" sx={{mt: '15%'}}>
      <Navbar/>
      
      <Outlet/>
    </Container>
  )
}


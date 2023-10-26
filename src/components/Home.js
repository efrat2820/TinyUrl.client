import React from 'react';
import Box from "@mui/material/Box";
import image from "../Image/homeImg.png"
import Image from "mui-image";


export default function Home() {
    return (
      <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
        mt: 0.5,
        ml:45,
      }}
    >    
         <Image src = {image} width={800} ></Image>
        </Box>
    );
  }
  

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React from 'react';
import image from "../Image/homeImg.png"
import Image from "mui-image";


export default function Home() {
    return (
      <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      
      {/* <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          //bgcolor={"yellow"}
          gutterBottom
        >
          */}
         {/* <Box
            component="img"
            sx={{
            height: 550,
            alignContent: CenterFocusStrong
            }}
            alt="Your logo."
            src={image}
        /> */}
          {/* <CardMedia src={image}></CardMedia> */}
         <Image src = {image} width={500}></Image>
        {/* </Typography>
        </Container> */}
        
        </Box>
    );
  }
  
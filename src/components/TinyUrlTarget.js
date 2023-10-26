import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Service from "../Service"
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import {orange,teal} from '@mui/material/colors';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Grid from '@mui/material/Grid';
import AllLinks from "./AllLink.js"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

export default function TinyUrlTarget() {

  const [name, setName] = useState();//מקום פרסום
  const [targetValue, setTargetValue] = useState();//value of target eg. 1 / elkayam
  const [uniqueName, setUniqeName] = useState("Name" );//uniqueName
  const [newUrl,setNewUrl] = useState("Your Tiny Url");;//url+target
  const [url,setUrl] = useState("Your Url");//old url
  const [title,setTitle] = useState("copy");

    const post = async()=>{      
      setNewUrl(await Service.postUrl(url,uniqueName))
      console.log('newUrl',newUrl)    
  }
  
  const change = (name,value) =>{
   
    setUniqeName(name);
    setUrl(value);
  }
  const handleClick=async()=>{
    setNewUrl(await Service.addTarget(uniqueName , name ,targetValue));
  }
  const c = () =>{
    setTitle("copied")
    setTimeout(()=>setTitle("copy"),2000);
    
  }

  return (
    
    <Grid container spacing={2}>
      <Grid item xs={7}>
    <Container 
    maxWidth="xs"
    >
    <Box
      sx={{
        flexGrow: 1,
        marginTop: 8,
        flex:"column",
        flexDirection: "column",
         alignItems: 'center',
        width: 500,
        maxWidth: '100%',
      }}
    >
    <Avatar sx={{m: 1, ml:22, bgcolor: orange[300] }}>
   <AutorenewIcon />
      </Avatar>
    <Typography sx={{ ml:20.5  }} component="h1" variant="h5">
          Target
        </Typography>
    <TextField 
        fullWidth
        disabled
        label={url} 
        id="margin-normal" 
        margin="normal" 
      />
    
    <TextField 
        disabled
        label={uniqueName}
        id="margin-normal" 
        margin="normal" 
    />
    <br/>
      <br/>

      <TextField  
        label="place of distribution " 
        id="margin-normal" 
        margin="normal" 
        //value={newUrl}
        onChange={(e)=>setName(e.target.value)}
    />  
       <TextField  
        label="value" 
        id="margin-normal" 
        margin="normal" 
      //  value
       onChange={(e)=>setTargetValue(e.target.value)}
    />  
       <TextField 
        fullWidth 
        disabled
        value={newUrl} 
        id="margin-normal" 
        margin="normal"  
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <CopyToClipboard text={newUrl}
              onCopy={c}>
                <Tooltip title={title}>
                <IconButton>
              <span><FileCopyOutlinedIcon sx={{width:22}}/></span>
              </IconButton>
              </Tooltip>
              </CopyToClipboard>   
            </InputAdornment>
          ),
        }}         
    />  
       
       <Button variant="contained" 
       onClick={handleClick}
       sx={{ mt: 3,ml:5, mb: 2,pl:5 ,pr:5 ,bgcolor: teal[300] }}
       >
      <SpeedDialIcon  /> add
      </Button> 

    </Box>
    
    
    </Container>
    
    </Grid>
    <Grid tem xs={5}>
    <AllLinks ch={change}/>
    </Grid>
    </Grid>
    
  );
}




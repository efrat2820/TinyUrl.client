import React, { useEffect,useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Service from '../Service';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {orange,teal} from '@mui/material/colors';
import CircularProgress from '@mui/material/CircularProgress';

export default function AllLinks({ch}) {

  let [links, setLinks] = useState(null);
   
    
  useEffect(()=>{
      async function func(){
          const newLinks = await Service.getLinks();
          setLinks(newLinks)
          console.log('links1',links)
      }
      func();
  },[])

const change = (item) =>{
  ch(item.uniqueName,item.originalUrl)
}

const deleted =async (id) =>{
  await Service.delete(id)
   const newLinks = await Service.getLinks();
   setLinks(newLinks)
}

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        mt:11 , pt:5 , pb:5
      }}
      
    >
      {links?
      <>
      {links.map((item)=>{
            return(
              <>
              <ListItem>
              <ButtonGroup variant="text" aria-label="text button group" sx={{color:orange[300],mr:1}}>
        <Button sx={{color:orange[300]}}><EditIcon onClick={()=>{change(item)}}/>   </Button>
        <Button sx={{color:orange[300]}}><DeleteIcon onClick={()=>{deleted(item.id)}}/>  </Button>
      
      </ButtonGroup>
            
              <ListItemText primary={item.uniqueName} secondary={item.originalUrl} />
            </ListItem>
            <Divider />
            </>
          
            )}) }
            </>:<CircularProgress sx={{color:teal[300],tabSize:200,ml:30,mt:20}}/>
            }
      
   
      
      
    </List>
  );
}

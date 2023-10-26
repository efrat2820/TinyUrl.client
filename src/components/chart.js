import React, { useEffect,useState } from "react";
import { PieChart } from 'react-minimal-pie-chart';
import Container from "@mui/material/Container";
import {orange,teal,grey} from '@mui/material/colors';
import Service from "../Service"


export default function Chart(){
  let [dataa, set] = useState(1);
   
    
  useEffect(()=>{
      async function func(){
          const data = await Service.getStatistics("r");
          console.log("d",data[0].cnt);
          set(data[0].cnt);
          console.log('stt',dataa);
      }
      func();
  },[])

  
return(
<Container >
<PieChart
radius={20}
animate
lineWidth={68}

  data={[
    { title: 'One', value: 10, color: grey[500]  },
    { title: 'Two', value: 15, color: orange[300] },
    { title: 'Three', value: 20, color: teal[300] },
  ]}

/>
</Container>
) 
}
import './App.css';
import Headerrec from './Comp/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DATASHOWS from './DATASHOW';
// import Icon from '@mui/material/Icon';
import {useState} from 'react';
function App() {
  const [data,setdata]=useState("");
  const [addata,setaddata]=useState([]);
 const showdata=()=>{
   setaddata([...addata, {data}]);
   setdata("");
  }
  return (
    <div className="App">
          <Headerrec />  
          <div className="addlist">
          <TextField id="filled-basic" label="" variant="filled" value={data} onChange={(event)=>setdata(event.target.value)}/> 
          <Button variant="contained" id="addbut" onClick={showdata}>ADD</Button></div>
          <div>
           {
            addata.map((element,index)=>{
              return(
             <DATASHOWS key={index} data={element.data} index={index}/>
             )
            })
           }</div>
    </div>
   
  );
}

export default App;

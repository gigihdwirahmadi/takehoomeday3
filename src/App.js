import React, {useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function App(){
  const [data, setData]= useState(null);
  const navigate = useNavigate();
  const buttonClick =()=>{

  }
  const getData= async() => {
    try {const response = await axios.get(
     " https://jsonplaceholder.typicode.com/posts"
    );
    if (response.status ===200){
      setData(response.data);
    }
    console.log(response.data);
    }catch (error){
      console.log(error);
    }
  };
  const Navigatefunc= (id,title) =>{
    navigate(`/${id}`, {state:{from:'content'}},)
  }
  useEffect(()=> {getData();},[]);
  return(
    
    <div className="wall">
        {data?.map((data)=>(
          <div class="item" key={data.title} onClick={() => {
                  Navigatefunc(data.id,data.title);
                }}><div class="no">{data.id}</div><div class="text">{data.title}</div></div>
        ))}
    </div>
  )
}
export default App;
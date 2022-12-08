
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,UseLocation, useLocation } from 'react-router-dom';
const Pages= ()=>{
    const location = useLocation();

    
    const {id}= useParams();
    console.log({id});
    console.log(` https://jsonplaceholder.typicode.com/posts/${id}`)
    const [users, setUsers]= useState(null);
    const getUsers= async() => {
      try {const response = await axios.get(
       `https://jsonplaceholder.typicode.com/posts/${id}`
       
      );
      if (response.status ===200){
        setUsers(response.data);
      }
    
      console.log(response.data);
      }catch (error){
        console.log(error);
      }
    };
    console.log(users)
    
  useEffect(()=> {getUsers();},[]);
    return (
        <>
       
          <div>{users.title}</div>
        
        </>
    );
};
export default Pages;
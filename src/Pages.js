import axios from "axios";
import React from "react";
import { useParams,UseLocation, useLocation } from 'react-router-dom';


export default function Pages() {
  const {id}= useParams();

  const [post, setPost] = React.useState(null);
  const baseURL = ` https://jsonplaceholder.typicode.com/posts/${id}`;
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (

    <div className="wall2">
      <div className="content">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      </div>
    </div>
  );
}

import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks';

export default function BlogContent() {

    let params = useParams();
    let url = 'http://localhost:3001/blogs/' + params.id;
    let {data : blog , loading , error} = useFetch(url);

  return (
   <div>
    {error && <div> {error} </div> }
    {loading && <div> Loading </div>}
    {blog && 
    <div> 
        <h2> {blog.title} </h2>
        <p> Written by - {blog.author} </p>
        <p> {blog.content} </p>
    </div>  
    }
   </div>
  )
}

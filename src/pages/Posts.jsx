import React, { useEffect, useState } from "react";
import getAllPosts from "../services/posts.api";

function Posts() {
  const [data, setData] = useState([]);
  async function getData() {
    const myData = await getAllPosts();
    console.log(myData);
    setData(myData)
    // console.log(await getAllPosts())
  }
  console.log(data)
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="posts">
         <h1>all posts</h1>
      {data.map((posts) => {
        // console.log(posts.title)
         return <p key={posts.id}>{posts.title}</p>
      })}
    </div>
  );
}

export default Posts;

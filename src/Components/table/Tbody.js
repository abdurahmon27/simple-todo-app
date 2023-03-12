import React from "react";
import Titem from "./tItem";

function Tbody({ posts, remove }) {
  return (
    <>
      <tbody>
        {posts.map((post, index) => (
          <Titem post={post} number={index + 1} key={post.id} remove={remove} />
        ))}
      </tbody>
    </>
  );
}

export default Tbody;

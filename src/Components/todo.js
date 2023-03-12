import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Thead from "./table/thead";
import "./styleForTodo.css";
import PostForm from "./table/PostForm";
import Tbody from "./table/Tbody";
function Todo() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Playing",
      description: "Video Games, Football",
    },
    { id: 2, title: "Coding", description: "Learning Coding" },
  ]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };
  return (
    <>
      <div className="todo mx-auto my-5">
        <PostForm createPost={createPost} />
        <h3 className="text-center my-3">Simple React TodoList</h3>

        <table className="mx-auto table w-50 table-borderless table-group-divider">
          <Thead />
          <Tbody posts={posts} remove={removePost} />
        </table>
      </div>
    </>
  );
}

export default Todo;

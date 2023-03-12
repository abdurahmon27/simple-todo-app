import React, { useState } from "react";
import MyInput from "../UI/input";
import MyButton from "../UI/button";

function PostForm({ createPost }) {
  const [post, setPost] = useState({ title: "", description: "" });
  const Add = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    createPost(newPost);
    //setPosts([...posts, {...post, id: Date.now()}]);
    setPost({ title: "", description: "" });
  };
  return (
    <>
      <form>
        <MyInput
          type="text"
          placeholder="Add Todo"
          className="form-control my-3"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <MyInput
          type="text"
          placeholder="Todo's description"
          className="form-control my-3"
          value={post.description}
          onChange={(e) => setPost({ ...post, description: e.target.value })}
        />
        <MyButton
          className="btn btn-primary text-center mx-auto w-100 my-3"
          onClick={Add}
        >
          Add
        </MyButton>
      </form>
    </>
  );
}

export default PostForm;

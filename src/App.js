import React, { useState, useEffect } from "react";
import Post from "./Post/Post";
import AddPost from "./Post/AddPost";
import PostDetail from "./Post/PostDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditPost from "./Post/EditPost";
function App() {
  const DB = "http://localhost:9000";
  const [post, setPost] = useState([]);

  useEffect(() => {
    return async () => {
      let response = await fetch(`${DB}/posts`);
      let posts = await response.json();
      setPost(posts);
    };
  }, []);

  const addPost = async (posts) => {
    console.log("post is ", posts);
    await fetch(`${DB}/posts`, {
      method: "POST",
      body: JSON.stringify({
        name: posts.name,
        description: posts.description,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    setPost([posts, ...post]);
  };

  const deleteHandler = async (id) => {
    await fetch(`${DB}/posts/${id}`, {
      method: "DELETE",
    });
    let filterPost = post.filter((post) => post.id !== id);
    setPost(filterPost);
  };
  const updateHandler = async (upPost) => {
    console.log("update post is", post);
    await fetch(`${DB}/posts/` + upPost.id, {
      method: "PATCH",
      body: JSON.stringify(upPost),
      headers: {
        "content-type": "application/json",
      },
    });
    setPost(post.map((post) => (post.id == upPost.id ? upPost : post)));
  };

  return (
    <div>
      <h2 className="text-white text-center mt-3 mb-2">Post</h2>
      <Router>
        <Routes>
          <Route
            path="/"
            exist
            element={<Post posts={post} removePost={deleteHandler} />}
          />
          <Route
            exist
            path="/add"
            element={<AddPost addpost={addPost} />}
          ></Route>
          <Route path="/post/:id" element={<PostDetail />} />
          <Route
            path={`/post/edit/:id`}
            element={<EditPost updatePost={updateHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Post from "./Post/Post";
import AddPost from "./Post/AddPost";
import PostDetail from "./Post/PostDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const postDB = "post";
  const [post, setPost] = useState([
    {
      name: "kaungsan",
      description: "i am a software engineer",
    },
  ]);

  const addPost = (posts) => {
    setPost([posts, ...post]);
  };

  const deleteHandler = (id) => {
    let filterPost = post.filter((post) => post.id !== id);
    setPost(filterPost);
  };
  useEffect(() => {
    let post = localStorage.getItem(postDB);
    const postObj = JSON.parse(post);
    if (post) {
      setPost(postObj);
    }
    console.log(post);
  }, []);

  useEffect(() => {
    localStorage.setItem(postDB, JSON.stringify(post));
  }, [post]);

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;

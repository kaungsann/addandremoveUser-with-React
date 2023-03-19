import React, { Component } from "react";
import PostCard from "./PostCard";
import "./post.css";
import { Link } from "react-router-dom";
class Post extends Component {
  remove(id) {
    console.log("id", id);
    this.props.removePost(id);
  }
  render() {
    // let state = this.props.post;
    return (
      <div>
        <Link to="/add">
          <button className="btn btn-success">
            Add
            <i className="fa fa-add"></i>
          </button>
        </Link>
        {this.props.posts.map((post) => (
          <PostCard key={post.id} post={post} remove={this.remove.bind(this)} />
        ))}
      </div>
    );
  }
}

export default Post;

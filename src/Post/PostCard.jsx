import React, { Component } from "react";
import image from "../img/images.png";
import { Link } from "react-router-dom";
class PostCard extends Component {
  delete = () => {
    this.props.remove(this.props.post.id);
  };
  render() {
    return (
      <div className="container">
        <div className="postBox card">
          <div>
            <img src={image} width="100px" height="100px" />
          </div>
          <div className="">
            <h5>{this.props.post.name}</h5>
            <h5>{this.props.post.description}</h5>
          </div>
          <div className="">
            <Link to={`/post/${this.props.post.id}`} state={this.props.post}>
              <button className="btn btn-info mx-2">
                <i className="fa fa-eye"></i>
              </button>
            </Link>
            <Link
              to={`/post/edit/${this.props.post.id}`}
              state={this.props.post}
            >
              <button className="btn btn-primary mx-2">
                <i className="fa fa-edit"></i>
              </button>
            </Link>

            <button
              className="btn btn-danger mx-2"
              onClick={this.delete.bind(this)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;

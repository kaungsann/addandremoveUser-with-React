import React, { Component, Fragment } from "react";
import image from "../img/images.png";
import "./post.css";
import { useLocation, Link } from "react-router-dom";
class PostDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Link to="/">
          <button className="btn btn-primary col-1 arrow">
            <i className="fa fa-arrow-left"></i>
          </button>
        </Link>

        <div className="card detailcard p-2">
          <img src={image} className="card-img-top image" />
          <div className="card-body">
            <h5 className="card-title">{this.props.states.state.name}</h5>
            <p className="card-text">{this.props.states.state.description}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default (props) => {
  const location = useLocation();
  return <PostDetail {...props} states={location} />;
};

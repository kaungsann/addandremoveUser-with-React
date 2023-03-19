import React, { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";

class EditPost extends Component {
  constructor(props) {
    super(props);
    let post = this.props.states.state;
    this.state = {
      id: post.id,
      name: post.name,
      description: post.description,
    };
    // console.log(this.props.states.state);
  }
  editPost(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.updatePost(this.state);
    this.props.navigate("/");
  }
  render() {
    return (
      <div className="card textform">
        <form onSubmit={this.editPost.bind(this)}>
          <div class="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="text"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="description" className="form-label">
              DescriptionaddUser
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary fload-end">
            Edit
          </button>
        </form>
      </div>
    );
  }
}
export default (props) => {
  const navigate = useNavigate();
  const state = useLocation();
  return <EditPost {...props} navigate={navigate} states={state} />;
};

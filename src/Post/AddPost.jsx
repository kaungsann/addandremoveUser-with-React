import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
class AddPost extends Component {
  state = {
    name: "",
    description: "",
  };
  addUser = (e) => {
    e.preventDefault();
    this.props.addpost({ id: uuid(), ...this.state });
    this.setState({
      name: "",
      description: "",
    });
    this.props.navigate("/");
  };

  render() {
    const { navigate } = this.props;
    return (
      <div className="card textform">
        <form onSubmit={this.addUser}>
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
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

//export default AddPost;

export default (props) => {
  const navigator = useNavigate();
  return <AddPost {...props} navigate={navigator} />;
};

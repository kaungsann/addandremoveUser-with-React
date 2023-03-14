import React from "react";
import "./user.css";
const user = (props) => {
  const removeUser = () => {
    props.remove(props.data.uuid);
  };

  return (
    <div className="userBox ">
      <div>
        <img
          src={props.data.image}
          className="me-3 images"
          width="75px"
          height="55px"
        />
      </div>
      <div className="name"> name : {props.data.name}</div>
      <div className="text ">
        <strong>Ph : {props.data.phone}</strong>
        <strong>Cell : {props.data.cell}</strong>
        <strong> Email : {props.data.email}</strong>
      </div>

      <button className="me-3 btn btn-primary deleteBtn">
        <i className="fa fa-trash" onClick={removeUser}></i>
      </button>
    </div>
  );
};

export default user;

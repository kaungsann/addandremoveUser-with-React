import React, { useState } from "react";

export default function AddUser(props) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [cell, setCell] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const changeImage = (e) => {
    setImage(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeCell = (e) => {
    setCell(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    let users = {
      name: name,
      image: image,
      cell: cell,
      phone: phone,
      email: email,
    };

    props.addUser(users);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="inputgroup">
        <div class="inputbox">
          <div>
            <label class="form-label text-white">Enter Image</label>
            <input
              type="text"
              class="form-control"
              placeholder="Image"
              id="image"
              onChange={changeImage}
            />
          </div>

          <div>
            <label class="form-label text-white">Enter Username</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="username"
              onChange={changeName}
            />
          </div>
          <div>
            <label class="form-label text-white">Enter phone</label>
            <input
              type="text"
              class="form-control"
              placeholder="phone "
              id="phone"
              onChange={changePhone}
            />
          </div>
          <div>
            <label class="form-label text-white">Enter cell</label>
            <input
              type="text"
              class="form-control"
              placeholder="cell"
              id="cell"
              onChange={changeCell}
            />
          </div>
          <div>
            <label class="form-label text-white">Enter Email</label>
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              id="email"
              onChange={changeEmail}
            />
          </div>
          <button
            type="submit"
            className="submit btn btn-primary  my-4 col-md-3"
          >
            create
          </button>
        </div>
      </div>
    </form>
  );
}

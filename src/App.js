import "./App.css";
import React, { useEffect, useState } from "react";
import User from "./pages/user";
import AddUser from "./pages/AddUser";

function App() {
  const [user, setUser] = useState([]);
  const [add, setAdd] = useState(false);
  const FormAppear = () => {
    setAdd(!add);
  };
  const deleteUser = (userid) => {
    let remove = user.filter((usr) => usr.uuid !== userid);
    setUser(remove);
  };
  const createUser = (users) => {
    let addUser = [users, ...user];
    setUser(addUser);
    setAdd(!add);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((users) => {
        let randomUser = users.results;
        console.log(randomUser);
        let filterUser = randomUser.map((usr) => {
          return {
            uuid: usr.login.uuid,
            name: `${usr.name.title} ${usr.name.first} ${usr.name.last} `,
            phone: usr.phone,
            cell: usr.cell,
            image: usr.picture.thumbnail,
            email: usr.email,
          };
        });
        console.log(filterUser);
        setUser(filterUser);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2 className="text-center my-4">Our Employee</h2>
      <button className="btn btn-primary add mb-3" onClick={FormAppear}>
        Add Employee
      </button>
      {add && <AddUser addUser={createUser} />}
      {user.map((usr) => (
        <User key={usr.uuid} data={usr} remove={deleteUser} />
      ))}
    </div>
  );
}

export default App;

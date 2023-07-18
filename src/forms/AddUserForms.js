import React, { useState } from "react";

const AddUserForm = (props) => {
  const initUser = { id: null, name: "", username: "" };

  const [user, setUser] = useState(initUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.username) {
      handleChange(e, props.addUser(user));
    }
  };

  return (
    <form>
      <label><b>Name</b></label>
      <input
        className="u-full-width"
        type="text"
        value={user.name}
        name="name"
        onChange={handleChange}
      />
      <label><b>Username</b></label>
      <input
        className="u-full-width"
        type="text"
        value={user.username}
        name="username"
        onChange={handleChange}
      /><br></br>
      <button  type="button" className="btn btn-outline-success" onClick={handleSubmit} >
        Add user
      </button>
    </form>
  );
};

export default AddUserForm;

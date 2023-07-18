import React, { useState } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.username) props.updateUser(user);
  };

  return (
    <form>
      <label>Name</label>
      <input
        className="u-full-width"
        type="text"
        value={user.name}
        name="name"
        onChange={handleChange}
      />
      <label>Username</label>
      <input
        className="u-full-width"
        type="text"
        value={user.username}
        name="username"
        onChange={handleChange}
      />
      <button type="button" className="btn btn-outline-primary" onClick={handleSubmit}>
        Edit user
      </button>
      <button type="button" className="btn btn-outline-warning" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;

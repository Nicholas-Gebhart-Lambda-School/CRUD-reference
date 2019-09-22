import React, { useState } from "react";

const EditUserForm = props => {
  // State initializations
  const [user, setUser] = useState(props.currentUser);

  // Event Handlers
  const inputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={user.name} onChange={inputChange} />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={inputChange}
      />
      <button>Update User</button>
      <button
        onClick={() => props.setEditMode(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;

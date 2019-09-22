import React, { useState } from "react";

const AddUserForm = props => {
  // Initialize a temporary state variable to track what is in our form
  const initialFormState = { id: null, name: "", email: "" };
  const [user, setUser] = useState(initialFormState);

  // Event Handlers
  const inputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    // function on form to check for empty inputs and reset the form onSubmit
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.email) return;

        props.addUser(user);
        setUser(initialFormState);
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
      <button>Add New User</button>
    </form>
  );
};

export default AddUserForm;

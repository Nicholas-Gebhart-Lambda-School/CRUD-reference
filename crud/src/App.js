import React, { useState } from "react";
import UserTable from "./Tables/UserTable";
import AddUserForm from "./Forms/AddUserForm";
import EditUserForm from "./Forms/EditUserForm";

const App = () => {
  // Default Values for 'currentUser'
  const initialFormState = { id: null, name: "", email: "" };
  // const initialUser = [
  //   { id: 1, name: "Nicholas", email: "Nicholas@gmail.com" }
  // ];

  // State Declarations
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // CRUD functions
  // Add new user
  const addUser = newUser => {
    newUser.id = users.length + 1;
    setUsers([...users, newUser]);
  };

  // Edit mode for existing user
  const editUser = user => {
    setEditMode(true);
    setCurrentUser({ id: user.id, name: user.name, email: user.email });
  };

  // Update users based on id
  const updateUser = (id, updatedUser) => {
    setEditMode(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD Application</h1>
      <div className="flex-row">
        {/* Added ternary to check if we're updating or adding a new user */}
        <div className="flex-large">
          {editMode ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                editMode={editMode}
                setEditMode={setEditMode}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              {/* Pass addUser function */}
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>User List</h2>
          {/* Pass the state to UserTable component */}
          {/* Pass editUser function */}
          <UserTable users={users} editUser={editUser} addUser={addUser} />
        </div>
      </div>
    </div>
  );
};

export default App;

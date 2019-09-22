import React, { useState } from "react";
import UserTable from "./Tables/UserTable";
import AddUserForm from "./Forms/AddUserForm";

const App = () => {
  // Dummy Data -- remove me once 'Add' feature is complete
  const dummyData = [
    { id: 1, name: "Nicholas", email: "Nicholas.Gebhart@gmail.com" },
    { id: 2, name: "Nicole", email: "Nicole.Gebhart@gmail.com" }
  ];

  // Initialize 'users' with empty object once dummy data is removed
  // State Declarations
  const [users, setUsers] = useState(dummyData);

  // CRUD functions
  const addUser = newUser => {
    newUser.id = users.length + 1;
    setUsers([...users, newUser]);
  };

  return (
    <div className="container">
      <h1>CRUD Application</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          {/* Pass addUser function */}
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>User List</h2>
          {/* Pass the state to UserTable component */}
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import UserTable from "./Tables/UserTable";

function App() {
  return (
    <div className="container">
      <h1>CRUD Application</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
        </div>
        <div className="flex-large">
          <h2>User List</h2>
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default App;

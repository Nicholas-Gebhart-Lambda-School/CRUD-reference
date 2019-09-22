import React from "react";

const UserTable = () => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Manage User</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Name Data</th>
        <th>Email Data</th>
        <button className="button muted-button">Edit</button>
        <button className="button muted-button">Delete</button>
      </tr>
    </tbody>
  </table>
);
export default UserTable;

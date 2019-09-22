import React from "react";

// Import 'users' state as props
const UserTable = props => (
  <table>
    {console.log(props)}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Manage User</th>
      </tr>
    </thead>
    <tbody>
      {/* Display Users table if users exist, else display 'No Users Exist' */}
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr>
            <th>{user.name}</th>
            <th>{user.email}</th>
            {/* onClick to send user object back to parent component */}
            <button
              className="button muted-button"
              onClick={() => {
                props.editUser(user);
              }}
            >
              Edit
            </button>
            <button className="button muted-button">Delete</button>
          </tr>
        ))
      ) : (
        <td colSpan={3}>No Users Exist</td>
      )}
    </tbody>
  </table>
);
export default UserTable;

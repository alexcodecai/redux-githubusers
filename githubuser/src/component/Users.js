import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/action/users";
import { getUsersDetail } from "../redux/action/usersDetail";
import UsersEntry from "./UsersEntry";
import Detail from "./Detail";
function Users({ users, getUsers, getUsersDetail, usersDetail }) {
  useEffect(() => {
    getUsers();
  }, []);

  if (users.isLoading) {
    return <div>loading</div>;
  } else if (users.error !== "") {
    return <div>{users.error}</div>;
  } else {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>UserName</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map(user => (
              <UsersEntry
                user={user}
                key={user.id}
                usersDetail={getUsersDetail}
              />
            ))}
          </tbody>
        </table>
        <Detail userDetail={usersDetail} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    usersDetail: state.usersDetail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    getUsersDetail: name => {
      dispatch(getUsersDetail(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

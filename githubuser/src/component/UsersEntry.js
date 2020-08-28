import React from "react";

const imageStyle = { width: 50, height: 50 };

const UserEntry = props => {
  return (
    <tr>
      <td>{props.user.id}</td>
      <td
        style={{ cursor: "pointer" }}
        onClick={() => props.usersDetail(props.user.login)}
      >
        {props.user.login}
      </td>
      <td>
        <img
          style={imageStyle}
          src={props.user.avatar_url}
          alt="profileImage"
        />
      </td>
    </tr>
  );
};
export default UserEntry;

import React from "react";

function Detail(props) {
  return (
    <div className="box">
      <div className="box">
        <div>
          Name:
          {props.userDetail.data.login
            ? props.userDetail.data.login
            : "No Name "}
        </div>
        <div>
          location:
          {props.userDetail.data.location
            ? props.userDetail.data.location
            : "NO LOCATION "}
        </div>
        <div>
          following:
          {props.userDetail.data.following
            ? props.userDetail.data.following
            : "No following "}
        </div>
        <div>
          followers:
          {props.userDetail.data.followers
            ? props.userDetail.data.followers
            : "No followers "}
        </div>
      </div>
    </div>
  );
}

export default Detail;

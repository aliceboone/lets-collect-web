import React, { useState } from "react";
import {Users} from "../../user";

const User = (props) => {
  console.log(props);
  return (
    <>
      <h1>Users Admin</h1>
      <div class="container row">
        <div class="col-md-6">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             <tr >
            {/* <td>{{users.name}}</td>
            <td>{{users.email}}</td> */}
            <td><button type="button" class="btn btn-primary">Show Details</button></td>
          </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">Display User Details and Add user here.</div>
      </div>
    </>
  );
};

export default User;

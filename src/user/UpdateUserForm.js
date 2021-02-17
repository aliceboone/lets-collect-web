import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../constants/index";

const UpdateUserForm = (props) => {
  const [formFields, setFormFields] = useState({
    imageUrl: props.currentUser.imageUrl,
    name: props.currentUser.name,
    email: props.currentUser.email
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [update, setUpdate] = useState(false);

  // event handlers for input
  const onInputChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.currentTarget.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API_BASE_URL}/user/${props.match.params.id}`, formFields, {
        headers: { Authorization: `Bearer ${localStorage.accessToken}` },
      })
      .then((response) => {
        setErrorMessage(`Profile successfully updated`);
        setUpdate(false);
      })
      .catch((error) => {
        setErrorMessage(`Failed to update profile`);
      });

    setFormFields({
      name: "",
      imageUrl: "",
    });
  };

  return (
    <form onSubmit={onFormSubmit} className="justify-content-center">
      <h2 className="new-card-form__header mt-3">Update Your Information</h2>
      <div className="form-group">
        <label className="exampleInputEmail1 m-2">Your Image:</label>
        <input
          id="imageUrl"
          name="imageUrl"
          onChange={onInputChange}
          value={formFields.imageUrl}
          className="form-control"
          placeholder={
            props.currentUser.imageUrl
              ? props.currentUser.imageUrl
              : "Your display image..."
          }
          type="text"
        />

        <label className="exampleInputEmail1 m-2">Name:</label>
        <input
          id="name"
          name="name"
          onChange={onInputChange}
          value={formFields.name}
          className="form-control"
          placeholder={
            props.currentUser.name
              ? props.currentUser.name
              : "Your display name..."
          }
          type="text"
        />

        <label className="exampleInputEmail1 m-2">Email:</label>
        <input
          id="email"
          name="email"
          onChange={onInputChange}
          value={formFields.email}
          className="form-control"
          placeholder={
            props.currentUser.email
              ? props.currentUser.email
              : "Your display email..."
          }
          type="text"
        />
        <button
          onClick={() => props.cancelUpdateUserCallback}
          className="btn btn-outline-info mt-3 mr-3"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-outline-success mt-3">
          Save
        </button>
      </div>
    </form>
  );
};

export default UpdateUserForm;

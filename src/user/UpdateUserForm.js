import React, { useState } from 'react';

const UpdateUserForm = (props) => {
    const [formFields, setFormFields] = useState({
        name: props.currentUser.name,
        imageUrl: props.currentUser.imageUrl,
    });
    
    // event handlers for input
    const onInputChange = (event)=> {
        setFormFields({...formFields, [event.target.name]: event.currentTarget.value})
    }

    // event handlers for textarea
    const onTextareaChange = (event)=> {
        setFormFields({...formFields, [event.target.name]: event.currentTarget.value})
    }

    const onFormSubmit = () => {
        event.preventDefault();
        props.updateUserCallback(formFields);

        setFormFields({
            name: '',
            imageUrl: '',
        })
    }

    return (
    <form onSubmit={onFormSubmit} className="justify-content-center">
        <h2 className="new-card-form__header mt-3">Update Your Information</h2>
        <div className="form-group">
        <label className="exampleInputEmail1 m-2">Name:</label>
        <input id="name"
                name="name"
                onChange={onInputChange}
                value={formFields.name}
                className="form-control" 
                placeholder={props.currentUser.name ? props.currentUser.name : "Your display name..."}
                type="text"
                />
        <label className="exampleInputEmail1 m-2">Your Image:</label>
        <input id="imageUrl"
                name="imageUrl"
                onChange={onInputChange}
                value={formFields.imageUrl}
                className="form-control" 
                placeholder={props.currentUser.imageUrl ? props.currentUser.imageUrl : "Your display image..."}
                type="text"
                />
        <button
            onClick={() => props.cancelUpdateUserCallback}
            className="btn btn-outline-info mt-3 mr-3"
        >Cancel</button>
        <button
            type="submit"
            className="btn btn-outline-success mt-3"
        >Save</button>
        </div>
    </form>
    )
}

export default UpdateUserForm;
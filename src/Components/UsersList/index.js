import React from "react";
import './index.css';

const UsersList = (props) => {
    console.log(props);
    const { details } = props
    const { image, name, role } = details
    console.log({name})

    return (
        <div className="profile-container">
            <img src={image} alt="profile Photo" className="image" />
            <div className="data">
                <h2>{name}</h2>
                <p>{role}</p>
            </div>
        </div>
    );
};

export default UsersList
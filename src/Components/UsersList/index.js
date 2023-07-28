import React from "react";
import './index.css';

const UsersList = (props) => {
    console.log(props);
    const { details, onDeleteUser } = props
    const { image, name, role, uniqueNo } = details

    const onDelete = () => {
        onDeleteUser(uniqueNo)
    }

    return (
        <div className="profile-container">
            <img src={image} alt="profile Photo" className="image" />
            <div className="data">
                <h2>{name}</h2>
                <p>{role}</p>
                <div className="cross-mark" onClick={onDelete}>
                    &#x2715;
                </div>
            </div>
        </div>
    );
};

export default UsersList
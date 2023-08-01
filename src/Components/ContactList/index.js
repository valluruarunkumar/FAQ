import React from "react";
import "./index.css"; // Import the CSS file

const ContactList = (props) => {
    const { contacts } = props
    const { name, mobileNo } = contacts
    return (
        <div className="one">
            <div className="list-container">
                <table className="contact-table">
                    <tr>
                        <td>
                            <strong>{name}</strong>
                        </td>
                        <td>
                            {mobileNo}
                        </td>
                    </tr>
                </table>
            </div>
        </div>

    );
};

export default ContactList;

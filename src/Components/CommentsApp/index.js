    import React from "react";
    import './index.css'

    const Comments=(props)=>{
        const {details,onDeleteComment}=props
        const {image,name,comment,uniqueId}=details


        const handleDeleteComment=()=>{
            onDeleteComment(uniqueId);
        };
        return(
            <div>
                <div className="comment-container">
                    <div>
                        <img src={image} className="circle"/>
                    </div>
                    <h2>{name}</h2>
                    <p>{comment}</p>
                    <div className="buttons">
                        <button>Like</button>
                        <button onClick={handleDeleteComment}>delete</button>
                    </div>
                </div>
            </div>
        )
    }
    export default Comments
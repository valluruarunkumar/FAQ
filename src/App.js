import React from 'react';
import { Component } from 'react';
import Comments from './Components/CommentsApp';
import {v4 as uuidv4} from 'uuid';

const initialComments=[
    {
        uniqueId:uuidv4(),
        image:"download.png",
        name:"Arun",
        comment:"It is really good"
    },
    {
        uniqueId:uuidv4(),
        image:"download.png",
        name:"baby",
        comment:"i am i love with tou Arun "
    }
]


class CommentsApp extends Component {



    state={finalComments:initialComments,
        name:"",
        comment:""
        }




    onAddComment=(event)=>{
        event.preventDefault()
        const {name,comment}=this.state
        const newComment={
            image:"download.png",
            name,
            comment
        }
        this.setState((prevState)=>({
            finalComments:[...prevState.finalComments,newComment],
                
        }),

        ()=>{
            this.setState({name:'',comment:''})
        }
    );
    
    };


    onDeleteComment=(uniqueId)=>{
        this.setState((prevState)=>({
            finalComments:prevState.finalComments.filter(
                (comments)=>comments.uniqueId!==uniqueId
            ),
        }));
    };


    onNameChange =(event) =>{
        this.setState({name:event.target.value})
    }

    onCommentChange =(event)=>{
        this.setState({comment:event.target.value})
    }
    

        
    render() {
        const commentCount = this.state.finalComments.length;
        return (
            <div className='container'>
                <div className='form-container'>
                    <h1>Comments</h1>
                    <form>
                        <h3>Say something about 4.O Technologies</h3>
                        <input type="text" placeholder="Your Name" onChange={this.onNameChange} />
                        <textarea placeholder="Your Comment" onChange={this.onCommentChange}></textarea>
                        <button onClick={this.onAddComment}>Add Comment</button>
                    </form>
                </div>
                <h2><span>{commentCount}</span>Comment</h2>
                {this.state.finalComments.map(ecahComment =>(
                        <Comments  details={ecahComment} onDeleteComment={this.onDeleteComment}/>
                    ))}
               
            </div>
        )
    }
}

export default CommentsApp;

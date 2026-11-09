import React, {useState} from 'react'
 const Post =(props) =>{
    const [likes, setLikes]=useState(0)
    const handleLikes=() =>{
        setLikes(likes + 1)
    }
    return(
        <div className="post-card">
    <img src={props.image} alt="Post content" />
    <p>{props.name}</p>
    <button onClick={handleLikes}>likes {likes}</button>
    </div>
    )
 }
 export default Post
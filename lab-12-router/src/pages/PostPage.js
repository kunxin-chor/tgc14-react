import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

export default function PostPage() {

    const {post_id} = useParams();

    const [activePostId, setActivePostId] = useState(post_id);

    // use empty object as the default value
    const [activePost, setActivePost] = useState({});

    // if the second argument of useEffect is an array of state variables
    // the effect function (which is the first argument)
    // will only execute what all those state variables 
    // change
    useEffect(()=>{
        
        const fetchPost = async(postId) => {
            let response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + postId);
            console.log(response.data);
            setActivePost(response.data);
        } 

        if (parseInt(activePostId)) {
            fetchPost(activePostId);
        }
   

    }, [activePostId]);
    

    return <React.Fragment>
        <h1>Posts</h1>
        
        <h2>Post Info</h2>
        <ul>
            <li>
                UserId: {activePost.userId}
            </li>
            <li>
                Id: {activePost.id}
            </li>
            <li>
                Title: {activePost.title}
            </li>
            <li>
                Completed: {activePost.completed}
            </li>

        </ul>
    </React.Fragment>
}
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosDemo = () => {
    const [post, setPost] = useState([])
    const [postId, setPostId] = useState(1)
    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${postId}`).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        }, [])
    })
    return (
        <div>
            <p>AxiosDemo</p>
            <p>hihi {postId}</p>
            <button onClick={()=>{
                setPostId(postId+1);
            }}>Click me</button>
        </div>
    )
}

export default AxiosDemo
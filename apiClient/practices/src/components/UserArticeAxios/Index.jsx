import React, { useEffect } from 'react'
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"

const Index=()=> {
    const [users, setUser] = useState([])
    useEffect(() => {
        const getUsers = axios.get(`http://localhost:3001/User`)
        const getArticle = axios.get(`http://localhost:3001/Article`)

        axios.all([getUsers, getArticle])
            .then(
                axios.spread((res1, res2) => {
                    const users = res1.data.map(user => {
                        return {
                            ...user,
                            article: res2.data.filter(item => {
                                return item.user_id === user.id;
                            })
                        };
                    });
                    setUser({ users: users });
                    console.log((users));
                })
            )
            .catch(err => {
                throw err;
            });
    },[])
    return (
        <div className='container pt-3'>
            <h1>User</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from(users).map((user) => (
                        <tr key={user.id}>
                            console.log(user.name);
                            <td>{user.name}</td>
                            <td>{user.article.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Index
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModules } from './moduleSlice';


function Dashboard() {
    let _data = {
        "username": "aditya",
        "password": "aditya",
        "role": "user",
        "id": 502
    }
    const dispatch = useDispatch();
    const modules = useSelector(state => state.module.modules);
    // Fetch and set posts
    useEffect(() => {
        // Fetch and set users
        // Fetch and set posts
        fetch('https://localhost:7019/api/Auth/getAllModule', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {
                "Content-Type": "text/json"
            }
        })
            .then(response => response.json())
            .then(data => dispatch(setModules(data)));
    }, [dispatch]);
    return (
        <>
            {modules.map(post => (
                <li >{post.modulename}</li>
            ))}
        </>
    );
}
export default Dashboard;
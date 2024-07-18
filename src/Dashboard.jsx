import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ListGroup } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModules } from './moduleSlice';

const options = [
    {
        name: 'Modules',
        scroll: true,
        backdrop: true,
    },
];
const modules_item = ["module1", "module2", "module3", "module4", "module5", "module6"];
const comp = modules_item.map(item => {
    return (
        <ListGroup action >
            <button><ListGroup.Item variant="secondary">{item}</ListGroup.Item></button>
        </ListGroup>)
})

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
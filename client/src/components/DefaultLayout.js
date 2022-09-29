import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button, Dropdown, Menu } from 'antd';

import './../resources/defaultlayout.css';



function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('test-users'));
    const navigate = useNavigate();
    const menu = (
        <Menu>
            <Menu.Item>
                <Link to="/Home">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/profile">
                    Profile
                </Link>
            </Menu.Item>
            <Menu.Item 
                onClick={()=>{
                    localStorage.removeItem('test-users');
                    navigate('/login');
                }}
            >
                <span>Logout</span>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className='layout'>
            <div className='header'>
                <h1 onClick={() => navigate('/home')} style={{cursor:'pointer'}}>GOOD GOOD CV</h1>
                <Dropdown overlay={menu} placement="bottomRight">
                    <Button>{user.username}</Button>
                </Dropdown>
            </div>
            <div className='content' style={{overflow: 'scroll'}}>
                {props.children}
            </div>
        </div>
    )
};

export default DefaultLayout;
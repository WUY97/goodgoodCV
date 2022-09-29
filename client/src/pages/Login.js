import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message, Spin } from 'antd';
import axios from 'axios';

import '../resources/authentication.css';

function Login() {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const user = await axios.post('/api/user/login', values);
            setLoading(false);
            message.success('Login successful');
            localStorage.setItem('test-users',JSON.stringify(user.data));
            navigate('/home');
        } catch (error) {
            setLoading(false);
            message.error('Login failed');
        };
    };

    useEffect(() => {
        if (localStorage.getItem('test-users')){
            navigate('/home');
        } 
    })

    return (
        <div className='auth-parent'>
            {loading && (<Spin />)}
            <Form layout='vertical' onFinish={onFinish}>
                <h1>Login</h1>
                <hr />
                <Form.Item 
                    name='username' 
                    label='Username'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder='username哦嘻嘻' />
                </Form.Item>
                <Form.Item 
                    name='password' 
                    label='Password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                
                >
                    <Input placeholder='password哦嘻嘻' type='password' />
                </Form.Item>
                <div className='d-flex align-items-center justify-content-between'>
                    <Link to='/register'>Click Here to Register</Link>
                    <Button type='primary' htmlType='submit'>
                        LOGIN
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Login
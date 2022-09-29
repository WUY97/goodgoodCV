import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input, message, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../resources/authentication.css';

function Register() {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    
    const onFinish = async (values) => {
            setLoading(true);
        try {
            await axios.post('/api/user/register', values);
            setLoading(false);
            message.success('Registration successful');
        } catch (error) {
            setLoading(false);
            message.error('Registration failed');
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
                <h1>Register</h1>
                <hr />
                <Form.Item name='username' label='Username'>
                    <Input placeholder='username哦嘻嘻' />
                </Form.Item>
                <Form.Item name='password' label='Password'>
                    <Input placeholder='password哦嘻嘻' type='password' />
                </Form.Item>
                <Form.Item name='confirm password' label='Confirm Password'>
                    <Input placeholder='再输一次password哦嘻嘻' type='password' />
                </Form.Item>
                <div className='d-flex align-items-center justify-content-between'>
                    <Link to='/Login'>Click Here to Login</Link>
                    <Button type='primary' htmlType='submit'>
                        REGISTER
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Register
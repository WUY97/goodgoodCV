import React from 'react';
import { Form, Input } from 'antd';
import { Col, Row } from 'antd';

function PersonalInfo() {
    const { TextArea } = Input;

    return (
        <>
            <Row justify="space-between">
                <Col className="gutter-row" span={7}>
                    <Form.Item
                        name='firstName'
                        label='First Name'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your first name!',
                            },
                        ]}
                    >
                        <Input placeholder='Tongtong' />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={7}>
                    <Form.Item
                        name='lastName'
                        label='Last Name'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your last name!',
                            },
                        ]}
                    >
                        <Input placeholder='Wu' />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={7}>
                    <Form.Item
                        name='email'
                        label='Email'
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input placeholder='wuyt96@outlook.com' />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="space-between">
                <Col className="gutter-row" span={7}>
                    <Form.Item
                        name='phone'
                        label='Phone Number'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input placeholder='+86 189 3322 9613' />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={7}>
                    <Form.Item
                        name='linkedIn'
                        label='LinkedIn'
                        rules={[{ required: false }]}
                    >
                        <Input placeholder='linkedin.com/in/yitong-wu6577' />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={7}>
                    <Form.Item
                        name='gitHub'
                        label='GitHub'
                        rules={[{ required: false }]}
                    >
                        <Input placeholder='github.com/WUY97' />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col className="gutter-row" span={24}>
                    <Form.Item
                        name='careerObjective'
                        label='Career Objective'
                        rules={[{ required: false }]}
                    >
                        <TextArea placeholder='Software Development Engineer' />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col className="gutter-row" span={24}>
                    <Form.Item
                        name='address'
                        label='Address'
                        rules={[{ required: false }]}
                    >
                        <TextArea placeholder='55 River Oaks Place #476 San Jose, CA 95134' />
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
}

export default PersonalInfo;

import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Col, Row } from 'antd';

function SkillsEducation() {
    const { TextArea } = Input;
    return (
        <>
            <h5>
                <b>Education</b>
            </h5>
            <hr />
            <Form.List name='education'>
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <>
                                <Row justify='space-between' align='top'>
                                <Col  span={2}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'ordering']}
                                            label='Ordering'
                                            rules={[
                                                {
                                                    required: true,
                                                    type: 'Int64',
                                                    message: 'Missing Ordering',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='1' />
                                        </Form.Item>
                                    </Col>
                                    <Col span={10}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'institution']}
                                            label='Institution'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Institution',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='London School of Economics and Political Science' />
                                        </Form.Item>
                                    </Col>
                                    <Col span={4}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'location']}
                                            label='Location'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Location',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='London, United Kingdom' />
                                        </Form.Item>
                                    </Col>

                                    <Col span={3}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'start']}
                                            label='Start Month'
                                            rules={[
                                                {
                                                    // type: 'date',
                                                    required: true,
                                                    message:
                                                        'Missing Start Month',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Sept 2018' />
                                            {/* <DatePicker picker='month' format='MMM YYYY'/> */}
                                        </Form.Item>
                                    </Col>
                                    <Col span={3}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'end']}
                                            label='End Month'
                                            rules={[
                                                {
                                                    // type: 'date',
                                                    required: true,
                                                    message:
                                                        'Missing End Month',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Sept 2019' />
                                            {/* <DatePicker picker='month' format='MMM YYYY'/> */}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify='space-between' align='top'>
                                    <Col span={12}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'qualification']}
                                            label='Qualification'
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        'Missing qualification',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='MSc Economic History (Research)' />
                                        </Form.Item>
                                    </Col>
                                    <Col span={3}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'GPA']}
                                            label='GPA'
                                            rules={[
                                                {
                                                    required: false,
                                                    message: 'Missing GPA',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='GPA: 3.7 / 4.0' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify='space-between' align='middle'>
                                    <Col span={20}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'description']}
                                            label='Description'
                                            type='date'
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        'Missing Description',
                                                },
                                            ]}
                                        >
                                            <TextArea placeholder='Description' />
                                        </Form.Item>
                                    </Col>
                                    <Col span={2}>
                                        <MinusCircleOutlined
                                            style={{
                                                fontSize: 20,
                                                color: 'tomato',
                                            }}
                                            onClick={() => remove(name)}
                                        />
                                    </Col>
                                </Row>
                            </>
                        ))}
                        <Form.Item>
                            <Button
                                type='dashed'
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                            >
                                Add Education
                            </Button>
                        </Form.Item>
                    </>
                )}
                        
            </Form.List>
            <h5>
                <b>Skills</b>
            </h5>
            <hr />
            <Form.List name='skills'>
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <>
                                <Row justify='space-between' align='middle'>
                                    <Col  span={2}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'ordering']}
                                            label='Ordering'
                                            rules={[
                                                {
                                                    required: true,
                                                    type: 'Int64',
                                                    message: 'Missing Ordering',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='1' />
                                        </Form.Item>
                                    </Col>
                                    <Col span={4}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'title']}
                                            label='Skill List Name'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Title',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Title' />
                                        </Form.Item>
                                    </Col>
                                    <Col span={14}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'list']}
                                            label='Skill List'
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        'Missing Tech Stack',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Tech Stack' />
                                        </Form.Item>
                                    </Col>
                                    <Col span={2}>
                                        <MinusCircleOutlined
                                            style={{
                                                fontSize: 20,
                                                color: 'tomato',
                                            }}
                                            onClick={() => remove(name)}
                                        />
                                    </Col>
                                </Row>
                            </>
                        ))}

                        <Form.Item>
                            <Button
                                type='dashed'
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                            >
                                Add Skill Set
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </>
    );
}

export default SkillsEducation;

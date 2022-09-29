import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Col, Row } from 'antd';

function ProjectExperience() {
    const { TextArea } = Input;
    return (
        <>
            <h5>
                <b>Professional Experience</b>
            </h5>
            <hr />
            <Form.List name='experience'>
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
                                    <Col span={5}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'company']}
                                            label='Company'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing company',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Nielsen IQ (NLSN.N)' />
                                        </Form.Item>
                                    </Col>
                                    <Col span={5}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'title']}
                                            label='Title'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing title',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Data Analyst Intern ' />
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
                                            <Input placeholder='Guangzhou, China' />
                                        </Form.Item>
                                    </Col>

                                    <Col span={2}>
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
                                            <Input placeholder='May 2017' />
                                            {/* <DatePicker picker='month' format='MMM YYYY'/> */}
                                        </Form.Item>
                                    </Col>
                                    <Col span={2}>
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
                                            <Input placeholder='Sept 2022' />
                                            {/* <DatePicker picker='month' format='MMM YYYY'/> */}
                                        </Form.Item>
                                    </Col>
                                    <Col span={3}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'techStack']}
                                            label='Tech Stack'
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        'Missing techStack',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='JavaScript' />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={20}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'summary']}
                                            label='Summary'
                                            rules={[
                                                {
                                                    required: false,
                                                    message: 'Missing Summary',
                                                },
                                            ]}
                                        >
                                            <TextArea
                                                placeholder='Summary'
                                                row={5}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify='space-between' align='middle'>
                                    <Col span={20}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'description']}
                                            label='Description'
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        'Missing Description',
                                                },
                                            ]}
                                        >
                                            <TextArea
                                                placeholder='Description'
                                                row={5}
                                            />
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
                                Add Experience
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <h5>
                <b>Project Experience</b>
            </h5>
            <hr />
            <Form.List name='projects'>
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <>
                                <Row justify='space-between'>
                                    <Col span={2}>
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
                                    <Col span={7}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'title']}
                                            label='Title'
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
                                    <Col span={7}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'techStack']}
                                            label='Tech Stack'
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        'Missing Tech Stack',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Tech Stack' />
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
                                            <Input placeholder='Jan 2022' />
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
                                                    type: 'date',
                                                    required: true,
                                                    message:
                                                        'Missing End Month',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Mar 2022' />
                                            {/* <DatePicker picker='month' format='MMM YYYY'/> */}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={20}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'summary']}
                                            label='Summary'
                                            rules={[
                                                {
                                                    required: false,
                                                    message: 'Missing Summary',
                                                },
                                            ]}
                                        >
                                            <TextArea
                                                placeholder='Summary'
                                                row={5}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify='space-between' align='middle'>
                                    <Col span={20}>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'description']}
                                            label='Description'
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        'Missing Description',
                                                },
                                            ]}
                                        >
                                            <TextArea
                                                placeholder='Description'
                                                row={5}
                                            />
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
                                Add Project
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </>
    );
}

export default ProjectExperience;

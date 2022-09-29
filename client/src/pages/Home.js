import React from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from './../components/DefaultLayout';
import { Col, Row } from 'antd';

import './../resources/templates.css';

function Home() {
    const navigate = useNavigate();
    const templates = [
        {
            title: 'Simple Resume',
            image: 'https://writelatex.s3.amazonaws.com/published_ver/16158.jpeg?X-Amz-Expires=14400&X-Amz-Date=20220625T152357Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20220625/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=245f244e2193eaf3033fc3155e554c179eef833c093ef82bab08ce4a5923a696',
        },
    ];
    return (
        <DefaultLayout>
            <Row justify='spance-between' align='center'>
                {templates.map((template, index) => {
                    return (
                        <>
                            <Col
                                className='home-template'
                                span={7}
                                align='center'
                            >
                                <div>
                                    <img
                                        src={template.image}
                                        alt={template.title}
                                        height='400'
                                    />
                                </div>
                                <div className='text'>
                                    <p>{template.title}</p>
                                    <button onClick={() => navigate(`/templates/${index+1}`)}>TRY</button>
                                </div>
                            </Col>
                        </>
                    );
                })}
            </Row>
        </DefaultLayout>
    );
}

export default Home;

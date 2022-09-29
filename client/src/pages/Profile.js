import React, { useState } from 'react';
import { Tabs, Form, Button, message, Spin } from 'antd';
import axios from 'axios';

import DefaultLayout from '../components/DefaultLayout';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ProjectExperience from '../components/ProjectExperience';

function Profile() {
    const [loading, setLoading] = useState(false);
    const { TabPane } = Tabs;
    const user = JSON.parse(localStorage.getItem('test-users'));

    const onFinish = async (value) => {
        setLoading(true);
        try {
            console.log(value);
            const result = await axios.post('/api/user/update', {
                ...value,
                _id: user._id,
            });
            localStorage.setItem('test-users', JSON.stringify(result.data));
            setLoading(false);
            message.success('Updated successfully');
        } catch (error) {
            setLoading(false);
            message.error('Update failed');
        }
    };
    return (
        <DefaultLayout>
            {loading && <Spin size='large' />}
            <div className='update-profile'>
                <h4><b>Update Profile</b></h4>
                <hr />
                <Form layout='vertical' onFinish={onFinish} initialValues={user}>
                    <Tabs defaultActiveKey='1'>
                        <TabPane tab='Personal Info' key='1'>
                            <PersonalInfo />
                        </TabPane>
                        <TabPane tab='Skills and Education' key='2'>
                            <SkillsEducation />
                        </TabPane>
                        <TabPane tab='Experience / Projects' key='3'>
                            <ProjectExperience />
                        </TabPane>
                    </Tabs>
                    <Button htmlType='submit'>UPDATE</Button>
                </Form>
            </div>
        </DefaultLayout>
    );
}

export default Profile;

import React from 'react';

import '../../resources/templates.css';

function Template1() {
    const user = JSON.parse(localStorage.getItem('test-users'));
    return (
        <div className='template1-parent'>
            <div className='top d-flex justify-content-between'>
                <h1>
                    {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
                </h1>
                <div>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.linkedIn}</p>
                    <p>{user.gitHub}</p>
                    <p>{user.address}</p>
                </div>
            </div>
            <div className='divider mt-2' />
            <div className='objective mt-2'>
                <h3>Objective</h3>
                <hr />
                <p>{user.careerObjective}</p>
            </div>

            <div className='divider mt-2' />
            <div className='education mt-2'>
                <h3>Education</h3>
                <hr />
                {user.education.map((education) => {
                    return (
                        <div className='d-flex align-items-center'>
                            <h6 style={{ width: 200 }}>
                                <b>
                                    {education.start} - {education.end}:{' '}
                                </b>
                            </h6>
                            <p>
                                <b>{education.qualification}</b> with{' '}
                                <b>{education.GPA}</b> in{' '}
                                <b>{education.institution}</b> in{' '}
                                <b>{education.location}</b>
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className='divider mt-2' />
            <div className='skills mt-2'>
                <h3>Skills</h3>
                <hr />
                {user.skills.map((skills) => {
                    return (
                        <>
                            <div className='d-flex align-items-center'>
                                <ul>
                                    <li>
                                        <b>{skills.title}: </b>
                                        {skills.list}
                                    </li>
                                </ul>
                            </div>
                        </>
                    );
                })}
            </div>
            <div className='divider mt-2' />
            <div className='experience mt-2'>
                <h3>Professional Experience</h3>
                <hr />
                {user.experience.map((experience) => {
                    return (
                        <>
                            <div className='d-flex align-items-center'>
                                <h6 style={{ width: 200 }}>
                                    <b>
                                        {experience.start} - {experience.end}:{' '}
                                    </b>
                                </h6>
                                <p>
                                    <b>{experience.title}</b> in{' '}
                                    <b>{experience.company}</b> in{' '}
                                    <b>{experience.location}</b>
                                </p>
                            </div>
                            <div>
                                <i>{experience.summary}</i>
                            </div>
                            <div>
                                <p>{experience.description}</p>
                            </div>
                        </>
                    );
                })}
            </div>
            <div className='divider mt-2' />
            <div className='projects mt-2'>
                <h3>Project Experience</h3>
                <hr />
                {user.projects.map((projects) => {
                    return (
                        <>
                            <div className='d-flex align-items-center'>
                                <h6 style={{ width: 200 }}>
                                    <b>
                                        {projects.start} - {projects.end}:{' '}
                                    </b>
                                </h6>
                                <p>
                                    <b>{projects.title}</b>
                                </p>
                            </div>
                            <div>
                                <i>
                                    {projects.summary}{' '}
                                    <b> Tech Stack: {projects.techStack}</b>
                                </i>
                            </div>
                            <div>
                                <p>{projects.description}</p>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default Template1;

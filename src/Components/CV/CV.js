import React, { Component } from "react";

class CV extends Component {

    render() {

        const { data } = this.props;
        const eduInstitutions = [];
        const workInstitutions = [];
        for (let i = 0; i < data.education.counter; i++) {
            eduInstitutions.push(
                [   <div key={i-1} id={`edu${i}`}>
                        <p key={i}>{data.education.institutions[i].name}</p>
                        <p key={i+1}>{data.education.institutions[i].start}</p>
                        <p key={i+2}>{data.education.institutions[i].end}</p>
                    </div>
                ]
            )
        }

        for (let i = 0; i < data.experience.counter; i++) {
            workInstitutions.push(
                [   <div key={i-1} id={`exp${i}`}>
                        <p key={i}>{data.experience.institutions[i].name}</p>
                        <p key={i+1}>{data.experience.institutions[i].position}</p>
                        <p key={i+2}>{data.experience.institutions[i].start}</p>
                        <p key={i+3}>{data.experience.institutions[i].end}</p>
                    </div>
                ]
            )
        }

        return (
            <div id="container">
                <div id="topSide">
                    <p>{`${data.about.name} ${data.about.surname}`}</p>
                    <div id="info">
                        <p>{data.about.email}</p>
                        <p>{data.about.address}</p>
                        <p>{data.about.phone}</p>
                    </div>
                </div>
                <div id="profile">
                    <p>{data.about.description}</p>
                </div>
                <div id="education">
                    {eduInstitutions}
                </div>
                <div id="experience">
                    {workInstitutions}
                </div>
                <div id="extraInfo">
                    <div id="skills">
                        <p>{data.extraInfo.skills}</p>
                    </div>
                    <div id="languages">
                        <p>{data.extraInfo.languages}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CV;
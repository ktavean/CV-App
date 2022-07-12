import React, { Component } from "react";
import uniqid from "uniqid";

class CV extends Component {

    render() {

        const { data } = this.props;
        console.log(data);
        const eduInstitutions = data.education.institutions.map((item, i) => {
            return(
                <div key={item.id} id={`edu${i}`}>
                    <p key={item.id+1}>{item.name}</p>
                    <p key={item.id+2}>{item.start}</p>
                    <p key={item.id+3}>{item.end}</p>
                </div>
            )
        });
        const workInstitutions = data.experience.institutions.map((item, i) => {
            return(
                <div key={item.id} id={`exp${i}`}>
                    <p key={item.id+1}>{item.name}</p>
                    <p key={item.id+2}>{item.position}</p>
                    <p key={item.id+3}>{item.start}</p>
                    <p key={item.id+4}>{item.end}</p>
                </div>
            )
        });

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
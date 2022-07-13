import React, { Component } from "react";
import "./CV.css";

class CV extends Component {

    render() {

        const { data } = this.props;
        console.log(data);
        const eduInstitutions = data.education.institutions.map((item, i) => {
            return(
                <div key={item.id} id={`edu${i}`}>
                    <h3 key={item.id+1}>{item.name}</h3>
                    <p key={item.id+2}>{item.field}</p>
                    <p key={item.id+3}>{item.start} - {item.end}</p>
                    
                </div>
            )
        });
        const workInstitutions = data.experience.institutions.map((item, i) => {
            return(
                <div key={item.id} id={`exp${i}`}>
                    <h3 key={item.id+1}>{item.name}</h3>
                    <p key={item.id+2}>{item.position}</p>
                    <p key={item.id+3}>{item.start}</p>
                    <p key={item.id+4}>{item.end}</p>
                </div>
            )
        });

        return (
            <div id="container">
                <div id="left-side">
                    <img alt="cv-pic" src="./Assets/Images/cv.jpg" width="250px" height="250px" />
                    <div id="left-side-text">
                        <div id="info">
                            <h2>Contact</h2>
                            <p>{data.about.email}</p>
                            <p>{data.about.address}</p>
                            <p>{data.about.phone}</p>
                        </div>
                        <div id="extraInfo">
                            <h2>Extra information</h2>
                            <div id="skills">
                                <h4>Skills</h4>
                                <p>{data.extraInfo.skills}</p>
                            </div>
                            <div id="languages">
                                <h4>Languages</h4>
                                <p>{data.extraInfo.languages}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="right-side">
                    <div id="top-side">
                        <h1>{`${data.about.name} ${data.about.surname}`}</h1>
                        <p>{data.about.description}</p>
                    </div>
                    <div id="education">
                        <h2>Education</h2>
                        {eduInstitutions}
                    </div>
                    <div id="experience">
                        <h2>Work experience</h2>
                        {workInstitutions}
                    </div>
                </div>
            </div>
        );
    }
}

export default CV;
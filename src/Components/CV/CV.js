import React, { Component } from "react";

class CV extends Component {

    render() {

        const { data } = this.props;

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
                    <div id="edu0">
                        <p>{data.education[0].name}</p>
                        <p>{data.education[0].start}</p>
                        <p>{data.education[0].end}</p>
                    </div>
                </div>
                <div id="experience">
                    <div id="exp0">
                        <p>{data.experience[0].name}</p>
                        <p>{data.experience[0].position}</p>
                        <p>{data.experience[0].start}</p>
                        <p>{data.experience[0].end}</p>
                    </div>
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
import React, { Component } from "react";

class Inputs extends Component {
    
    render() {

        const handleChange = this.props.handleChange;
        const addInputs = this.props.addInputs;
        const eduInputs = this.props.eduInputs;
        const jobInputs = this.props.jobInputs;

        return (
            <div id="inputs">
          <div id="aboutInp">
            <h3>About you</h3>
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" onChange={e => handleChange(e)} />
            <label htmlFor="surname">Surname: </label>
            <input id="surname" name="surname" onChange={e => handleChange(e)} />
            <label htmlFor="name">Email: </label>
            <input id="email" name="email" onChange={e => handleChange(e)} />
            <label htmlFor="address">Address: </label>
            <input id="address" name="address" onChange={e => handleChange(e)} />
            <label htmlFor="phone">Phone number: </label>
            <input id="phone" name="phone" onChange={e => handleChange(e)} />
            <label htmlFor="description">About you: </label>
            <textarea id="description" name="description" rows="10" cols="80" onChange={e => handleChange(e)}/>
          </div>
          <div id="educationInp">
            <h3>Education</h3>
            {eduInputs}
            <button type="button" id="addEdu" onClick={e => addInputs(e)}>Add education</button>
          </div>
          <div id="experienceInp">
            <h3>Work experience</h3>
            {jobInputs}
            <button type="button" id="addExp" onClick={e => addInputs(e)}>Add experience</button>
          </div>
          <div id="extraInfoInp">
            <div id="skillsInp">
              <h3>Skills</h3>
              <input type="text" id="skills" name="skills" onChange={e => handleChange(e)} />
            </div>
            <div id="languagesInp">
              <h3>Languages</h3>
              <input type="text" id="languages" name="languages" onChange={e => handleChange(e)} />
            </div>
          </div>
        </div>
        );
    };
};

export default Inputs;
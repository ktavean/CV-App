import React, { Component } from "react";
import "./Inputs.css";

class Inputs extends Component {
    
    render() {

        const handleChange = this.props.handleChange;
        const addInputs = this.props.addInputs;
        const removeInputs = this.props.removeInputs;
        const eduInp = this.props.eduInputs;
        const jobInp = this.props.jobInputs;
        const checkbox = this.props.checkbox;

        const eduInputs = eduInp.map((item, i) => {
            return(
            <div key={item.id} className="edu">
              <div>
                <label key={item.id+1} htmlFor="eduName">Institution's name: </label>
                <input key={item.id+2} id={`eduName${i}`} name="eduName" onChange={e => handleChange(e)} />
              </div>
              <div>
                <label key={item.id+3} htmlFor="field">Field of study:</label>
                <input key={item.id+4} id={`field${i}`} name="field" onChange={e => handleChange(e)} />
              </div>
              <div>
                <label key={item.id+5} htmlFor="startDate">Start date: </label>
                <input key={item.id+6} type="date" id={`startDate${i}`} name="startDate" onChange={e => handleChange(e)} />
              </div>
              <div>
                <label key={item.id+7} htmlFor="graduationDate">Graduation date: </label>
                <input key={item.id+8} type="date" id={`graduationDate${i}`} name="graduationDate" onChange={e => handleChange(e)} />
              </div>
              <div>
                <label key={item.id+9} htmlFor="studying">Still studying here?</label>
                <input key={item.id+10} type="checkbox" id={`studying${i}`} name="studying" onChange={e => checkbox(e)} />
              </div>
                <button key={item.id+11} type="button" id={`delEdu${i}`} onClick={e => removeInputs(e)}>Remove education</button>
            </div>
            );
          });
          const jobInputs = jobInp.map((item, i) => {
            return(
            <div key={item.id} className="exp">  
              <div>
                <label key={item.id+1} htmlFor="expName">Company's name: </label>
                <input key={item.id+2} type="text" id={`expName${i}`} name="expName" onChange={e => handleChange(e)} />
              </div>
              <div>
                <label key={item.id+3} htmlFor="posOccupied">Position occupied: </label>
                <input key={item.id+4} type="text" id={`posOccupied${i}`} name="posOccupied" onChange={e => handleChange(e)} />
              </div>
              <div>
                <label key={item.id+5} htmlFor="workStart">Start date: </label>
                <input key={item.id+6} type="date" id={`workStart${i}`} name="workStart" onChange={e => handleChange(e)} />
              </div>
              <div>
                <label key={item.id+7} htmlFor="workEnd">End date: </label>
                <input key={item.id+8} type="date" id={`workEnd${i}`} name="workEnd" onChange={e => handleChange(e)} />
              </div>
              <div>
                <label key={item.id+9} htmlFor="working">Still working here?</label>
                <input key={item.id+10} type="checkbox" id={`working${i}`} name="working" onChange={e => checkbox(e)} />
              </div>
                <button key={item.id+11} type="button" id={`delWork${i}`} onClick={e => removeInputs(e)}>Remove experience</button>
            </div>
            );
          });

        return (
        <div id="inputs">
          <form>
              <div id="aboutInp">
                <h3>About you</h3>
                <label htmlFor="firstName">First name: </label>
                <input id="firstName" name="firstName" onChange={e => handleChange(e)} />
                <label htmlFor="lastName">Last name: </label>
                <input id="lastName" name="lastName" onChange={e => handleChange(e)} />
                <label htmlFor="email">Email: </label>
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
          </form>
        </div>
        );
    };
};

export default Inputs;
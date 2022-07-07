import React, { Component } from "react";
import CV from "./Components/CV/CV";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cv_data: {
        about: {
          name: "",
          surname: "",
          email: "",
          address: "",
          phone: "",
          description: ""
        },
        education: [
            {
              name: "",
              start: "",
              end: ""
            }
          ],
        experience: [
            {
              name: "",
              position: "",
              start: "",
              end: ""
            }
          ],
        extraInfo: {
            skills: [],
            languages: []
          }
      }
    }
  }

  handleChange = (input) => {
    switch(input.target.name) {
      case "name":
        this.setState(
          { 
            cv_data: {...this.state.cv_data, 
              about: {...this.state.cv_data.about,
                name: input.target.value
              }
            }
          }
        );
        break;
      case "surname":
        this.setState(
          { cv_data: {...this.state.cv_data, 
              about: {...this.state.cv_data.about,
                surname: input.target.value
              }
            }
          }
        );
        break;
      case "email":
        this.setState(
          { cv_data: {...this.state.cv_data, 
              about: {...this.state.cv_data.about,
                email: input.target.value
              }
            }
          }
        );
        break;
      case "address":
        this.setState(
          { cv_data: {...this.state.cv_data, 
              about: {...this.state.cv_data.about,
                address: input.target.value
              }
            }
          }
        );
        break;
      case "phone":
        this.setState(
          { cv_data: {...this.state.cv_data, 
              about: {...this.state.cv_data.about,
                phone: input.target.value
              }
            }
          }
        );
        break;
      case "description":
        this.setState(
          { cv_data: {...this.state.cv_data ,
              about: {...this.state.cv_data.about,
                description: input.target.value
              }
            }
          }
        );
        break;
      case "eduName":
        console.log(...this.state.cv_data.education)
        this.setState(
          { cv_data: {...this.state.cv_data, 
              education: [
                {
                  ...this.state.cv_data.education[0],
                  name: input.target.value,
                }
              ]
            }
          }
        );
        break;
      case "startDate":
        this.setState(
          { cv_data: {...this.state.cv_data, 
              education: [
                {
                  ...this.state.cv_data.education[0],
                  start: input.target.value
                }
              ]
            }
          }
        );
        break;
      case "graduationDate":
        this.setState(
          { cv_data: {...this.state.cv_data, 
              education: [
                {
                  ...this.state.cv_data.education[0],
                  end: input.target.value
                }
              ]
            }
          }
        );
        break;
      case "expName":
        this.setState(
          { cv_data: {...this.state.cv_data, 
              experience: [
                {
                  ...this.state.cv_data.experience[0],
                  name: input.target.value
                }
              ]
            }
          }
        );
        break;
      case "posOccupied":
        this.setState( 
          { cv_data: {...this.state.cv_data,
              experience: [
              {
                ...this.state.cv_data.experience[0],
                position: input.target.value
              }
              ]
            }
          }
        );
        break;
      case "workStart":
        console.log(this.state.cv_data.experience)
        this.setState(
          { cv_data: {...this.state.cv_data, 
              experience: [
                {
                  ...this.state.cv_data.experience[0],
                  start: input.target.value
                }
              ]
            }
          }
        );
        break;
      case "workEnd":
        this.setState(
          { cv_data: {...this.state.cv_data, 
              experience: [
                {
                  ...this.state.cv_data.experience[0],
                  end: input.target.value
                }
              ]
            }
          }
        );
        break;
      case "skills":
        this.setState(
          { cv_data: {...this.state.cv_data,
              extraInfo: {...this.state.cv_data.extraInfo,
                skills: [input.target.value],
              }
            }
          }
        );
        break;
      case "languages":
        this.setState(
          { cv_data: {...this.state.cv_data,
              extraInfo: {...this.state.cv_data.extraInfo,
                languages: [input.target.value],
              }
            }
          }
        );
        break;
      default: 
        break;
    }
  }

  addInputs = (type) => {
    switch(type.target.id) {
      case "addEdu":
        
        break;
      default:
        break;
    }
  }

  render() {

    const { cv_data } = this.state;

    return (
      <div className="App">
        <div id="inputs">
          <div id="aboutInp">
            <h3>About you</h3>
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" onChange={e => this.handleChange(e)} />
            <label htmlFor="surname">Surname: </label>
            <input id="surname" name="surname" onChange={e => this.handleChange(e)} />
            <label htmlFor="name">Email: </label>
            <input id="email" name="email" onChange={e => this.handleChange(e)} />
            <label htmlFor="address">Address: </label>
            <input id="address" name="address" onChange={e => this.handleChange(e)} />
            <label htmlFor="phone">Phone number: </label>
            <input id="phone" name="phone" onChange={e => this.handleChange(e)} />
            <label htmlFor="description">About you: </label>
            <textarea id="description" name="description" rows="10" cols="80" onChange={e => this.handleChange(e)}/>
          </div>
          <div id="educationInp">
            <h3>Education</h3>
            <label htmlFor="eduName">Institution's name: </label>
            <input id="eduName" name="eduName" onChange={e => this.handleChange(e)} />
            <label htmlFor="startDate">Start date: </label>
            <input type="date" id="startDate" name="startDate" onChange={e => this.handleChange(e)} />
            <label htmlFor="graduationDate">Graduation date: </label>
            <input type="date" id="graduationDate" name="graduationDate" onChange={e => this.handleChange(e)} />
            <button type="button" id="addEdu" onClick={e => this.addInputs(e)}>Add education</button>
          </div>
          <div id="experienceInp">
            <h3>Work experience</h3>
            <label htmlFor="expName">Company's name: </label>
            <input id="expName" name="expName" onChange={e => this.handleChange(e)} />
            <label htmlFor="posOccupied">Position occupied: </label>
            <input id="posOccupied" name="posOccupied" onChange={e => this.handleChange(e)} />
            <label htmlFor="workStart">Start date: </label>
            <input type="date" id="workStart" name="workStart" onChange={e => this.handleChange(e)} />
            <label htmlFor="workEnd">End date: </label>
            <input type="date" id="workEnd" name="workEnd" onChange={e => this.handleChange(e)} />
            <button type="button" id="addExp" onClick={e => this.addInputs(e)}>Add experience</button>
          </div>
          <div id="extraInfoInp">
            <div id="skillsInp">
              <h3>Skills</h3>
              <input type="text" name="skills" onChange={e => this.handleChange(e)} />
            </div>
            <div id="languagesInp">
              <h3>Languages</h3>
              <input type="text" name="languages" onChange={e => this.handleChange(e)} />
            </div>
          </div>
        </div>
        <CV data={cv_data} />
      </div>
    );
  }
}

export default App;

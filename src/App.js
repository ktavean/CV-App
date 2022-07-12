import React, { Component } from "react";
import CV from "./Components/CV/CV";
import Inputs from "./Components/Inputs";
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
        education: {
          counter: 1,
          institutions: [
            {
              name: "",
              start: "",
              end: ""
            }
          ]
        },
        experience: {
          counter: 1,
          institutions: [
            {
              name: "",
              position: "",
              start: "",
              end: ""
            }
          ]
        },
        extraInfo: {
            skills: [],
            languages: []
          }
      }
    };
  };

  handleChange = (input) => {

    // the other state changes
    switch(input.target.id) {
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
    // education & work experience state change
    const newEduState = this.state.cv_data.education.institutions.slice();
    const newExpState = this.state.cv_data.experience.institutions.slice();
    const id = input.target.id;
    const i = id.slice(id.length-1);
    const value = input.target.value;

    if (id.includes("eduName")) {
      newEduState[i].name = value;
      this.setState(
        {
          cv_data: {...this.state.cv_data,
            education: {
              ...this.state.cv_data.education,
              institutions: newEduState
            }
          }
        }
      )
    } else if (id.includes("startDate")) {
      newEduState[i].start = value;
      this.setState(
        {
          cv_data: {...this.state.cv_data,
            education: {
              ...this.state.cv_data.education,
              institutions: newEduState
            }
          }
        }
      )
    } else if (id.includes("graduationDate")) {
      newEduState[i].end = value;
      this.setState(
        {
          cv_data: {...this.state.cv_data,
            education: {
              ...this.state.cv_data.education,
              institutions: newEduState
            }
          }
        }
      )
    } else if (id.includes("expName")) {
      newExpState[i].name = value;
      this.setState(
        {
          cv_data: {...this.state.cv_data,
            experience: {
              ...this.state.cv_data.experience,
              institutions: newExpState
            }
          }
        }
      )
    } else if (id.includes("posOccupied")) {
      newExpState[i].position = value;
      this.setState(
        {
          cv_data: {...this.state.cv_data,
            experience: {
              ...this.state.cv_data.experience,
              institutions: newExpState
            }
          }
        }
      )
    } else if (id.includes("workStart")) {
      newExpState[i].start = value;
      this.setState(
        {
          cv_data: {...this.state.cv_data,
            experience: {
              ...this.state.cv_data.experience,
              institutions: newExpState
            }
          }
        }
      )
    } else if (id.includes("workEnd")) {
      newExpState[i].end = value;
      this.setState(
        {
          cv_data: {...this.state.cv_data,
            experience: {
              ...this.state.cv_data.experience,
              institutions: newExpState
            }
          }
        }
      )
    }
  }

  addInputs = (type) => {
    switch(type.target.id) {
      case "addEdu":
        this.setState(
          { cv_data: {...this.state.cv_data, 
              education: {
                counter: this.state.cv_data.education.counter + 1,
                institutions: this.state.cv_data.education.institutions.concat(
                  [
                    {
                      name: "",
                      start: "",
                      end: ""
                    }
                ])
              }
            }
          }
        );
        break;
      case "addExp":
        this.setState(
          { cv_data: {...this.state.cv_data, 
              experience: {
                counter: this.state.cv_data.experience.counter + 1,
                institutions: this.state.cv_data.experience.institutions.concat(
                  [
                    {
                      name: "",
                      position: "",
                      start: "",
                      end: ""
                    }
                  ]
                )
              }
            }
          }
        );
        break;
      default:
        break;
    }
  }

  render() {

    const { cv_data } = this.state;
    const eduInputs = [];
    const jobInputs = [];
    for (let i = 0; i < cv_data.education.counter; i++) {
      eduInputs.push(
        [
          <label key={i} htmlFor="eduName">Institution's name: </label>,
          <input key={i+1} id={`eduName${i}`} name="eduName" onChange={e => this.handleChange(e)} />,
          <label key={i+2} htmlFor="startDate">Start date: </label>,
          <input key={i+3} type="date" id={`startDate${i}`} name="startDate" onChange={e => this.handleChange(e)} />,
          <label key={i+4} htmlFor="graduationDate">Graduation date: </label>,
          <input key={i+5} type="date" id={`graduationDate${i}`} name="graduationDate" onChange={e => this.handleChange(e)} />
        ]
      );
    }
    for (let i = 0; i < cv_data.experience.counter; i++) {
      jobInputs.push(
        [
          <label key={i} htmlFor="expName">Company's name: </label>,
          <input key={i+1} id={`expName${i}`} name="expName" onChange={e => this.handleChange(e)} />,
          <label key={i+2} htmlFor="posOccupied">Position occupied: </label>,
          <input key={i+3} id={`posOccupied${i}`} name="posOccupied" onChange={e => this.handleChange(e)} />,
          <label key={i+4} htmlFor="workStart">Start date: </label>,
          <input key={i+5} type="date" id={`workStart${i}`} name="workStart" onChange={e => this.handleChange(e)} />,
          <label key={i+6} htmlFor="workEnd">End date: </label>,
          <input key={i+7} type="date" id={`workEnd${i}`} name="workEnd" onChange={e => this.handleChange(e)} />
        ]
      );
  }

    return (
      <div className="App">
        <Inputs eduInputs={eduInputs} jobInputs={jobInputs} addInputs={this.addInputs} handleChange={this.handleChange} />
        <CV data={cv_data} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import uniqid from "uniqid";
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
          inputs: [
            {
              inp: "",
              id: uniqid()
            }
          ],
          institutions: [
            {
              name: "",
              start: "",
              end: "",
              id: uniqid()
            }
          ]
        },
        experience: {
          inputs: [
            {
              inp: "",
              id: uniqid()
            }
          ],
          institutions: [
            {
              name: "",
              position: "",
              start: "",
              end: "",
              id: uniqid()
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
                inputs: this.state.cv_data.education.inputs.concat(
                  [
                    {
                      inp: "",
                      id: uniqid()
                    }
                  ]
                ),
                institutions: this.state.cv_data.education.institutions.concat(
                  [
                    {
                      name: "",
                      start: "",
                      end: "",
                      id: uniqid()
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
                inputs: this.state.cv_data.experience.inputs.concat(
                  [
                    {
                      inp: "",
                      id: uniqid()
                    }
                  ]
                ),
                institutions: this.state.cv_data.experience.institutions.concat(
                  [
                    {
                      name: "",
                      position: "",
                      start: "",
                      end: "",
                      id: uniqid()
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

  removeInputs = (input) => {
    const id = input.target.id;
    const i = id.slice(id.length-1);
    const deletedEduState = this.state.cv_data.education.institutions.slice();
    const deletedEduInpState = this.state.cv_data.education.inputs.slice();
    const deletedWorkState = this.state.cv_data.experience.institutions.slice();
    const deletedWorkInpState = this.state.cv_data.experience.inputs.slice();
    deletedEduState.splice(i, 1);
    deletedEduInpState.splice(i, 1);
    deletedWorkState.splice(i, 1);
    deletedWorkInpState.splice(i ,1);

    if (id.includes("delEdu")) {
      this.setState(
        {
          cv_data: {...this.state.cv_data,
            education: {
              inputs: deletedEduInpState,
              institutions: deletedEduState
            }
          }
        }
      )
    }
    if (id.includes("delWork")) {
      this.setState(
        {
          cv_data: {...this.state.cv_data,
            experience: {
              inputs: deletedWorkInpState,
              institutions: deletedWorkState
            }
          }
        }
      )
    }
  }


  render() {

    const { cv_data } = this.state;
    

    return (
      <div className="App">
        <Inputs eduInputs={cv_data.education.inputs} jobInputs={cv_data.experience.inputs} addInputs={this.addInputs} removeInputs={this.removeInputs} handleChange={this.handleChange} />
        <CV data={cv_data} />
      </div>
    );
  }
}

export default App;

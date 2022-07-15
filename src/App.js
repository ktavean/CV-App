import React, { Component } from "react";
import uniqid from "uniqid";
import ReactToPrint from "react-to-print"
import CV from "./Components/CV/CV";
import Inputs from "./Components/Inputs";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cv_data: {
        about: {
          firstName: "OCTAVIAN",
          lastName: "TODOR",
          email: "doggo.heckin@gmail.com",
          address: "Lorem Ipsum Street No. 17",
          phone: "+40737928741",
          description: "Doggo ipsum  Floofs most angery pupper I have ever seen super chub aqua doggo most angery pupper I have ever seen big ol, borking doggo pats h*ck long doggo, shoober shoob ur givin me a spook most angery pupper I have ever seen. Smol wow very biscit boof aqua doggo bork puggo shoob, big ol you are doing me a frighten the neighborhood pupper you are doing me a frighten borking doggo. "
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
              name: "Lorem Ipsum University",
              field: "Psychology",
              start: "2019",
              end: "2022",
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
              name: "Lorem Ipsum company",
              position: "Junior Dev",
              start: "2022",
              end: "Present",
              id: uniqid()
            }
          ]
        },
        extraInfo: {
            skills: ["HTML, CSS, Javascript, React.JS"],
            languages: ["Romanian, English"]
          }
      }
    };
  };

  handleChange = (input) => {

    // the other state changes
    switch(input.target.id) {
      case "firstName":
        this.setState(
          { 
            cv_data: {...this.state.cv_data, 
              about: {...this.state.cv_data.about,
                firstName: input.target.value.toUpperCase()
              }
            }
          }
        );
        break;
      case "lastName":
        this.setState(
          { cv_data: {...this.state.cv_data, 
              about: {...this.state.cv_data.about,
                lastName: input.target.value.toUpperCase()
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
    } else if (id.includes("field")) {
      newEduState[i].field = value;
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

  checkbox = (input) => {
    const id = input.target.id;
    const i = id.slice(id.length-1);
    const newEduState = this.state.cv_data.education.institutions.slice();
    const newWorkState = this.state.cv_data.experience.institutions.slice();

    if (id.includes("studying") && input.target.checked) {
      newEduState[i].end = "present";
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
    } else if (id.includes("studying") && !input.target.checked) {
      newEduState[i].end = "";
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
    } 
    if (id.includes("working") && input.target.checked) {
      newWorkState[i].end = "present";
      this.setState(
        {
          cv_data: {...this.state.cv_data,
            experience: {
              ...this.state.cv_data.experience,
              institutions: newWorkState
            }
          }
        }
      )
    } else if (id.includes("working") && !input.target.checked) {
      newWorkState[i].end = "";
      this.setState(
        {
          cv_data: {...this.state.cv_data,
            experience: {
              ...this.state.cv_data.experience,
              institutions: newWorkState
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
        <header>
          <h2>Build-A-CV</h2>
          <ReactToPrint 
          trigger = {() => <button>Print</button>}
          content = {() => this.componentRef}
          documentTitle = {`${this.state.cv_data.about.firstName} ${this.state.cv_data.about.lastName}-CV`}
          
          />
        </header>
        <div id="middle-part">
          <Inputs eduInputs={cv_data.education.inputs} jobInputs={cv_data.experience.inputs} addInputs={this.addInputs} removeInputs={this.removeInputs} handleChange={this.handleChange} checkbox={this.checkbox}/>
          <CV data={cv_data} ref={el => this.componentRef = el} />
        </div>
        <footer>
          Made by ktavean. 2022
        </footer>
      </div>
    );
  }
}

export default App;

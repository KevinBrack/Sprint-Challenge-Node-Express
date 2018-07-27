import React, { Component } from "react";
import "./App.css";
import axios from "axios";

// components
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    this.getProjects();
  }

  getProjects = () => {
    axios.get("http://localhost:8000/api/projects").then(response => {
      // console.log("RESPONSE", response);
      this.setState({ projects: response.data });
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.projects.length > 0 ? (
          <Projects projects={this.state.projects} />
        ) : null}
      </div>
    );
  }
}

export default App;

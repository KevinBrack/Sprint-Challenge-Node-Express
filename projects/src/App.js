import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "../components/Header/Header";

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
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import TOC from "./component/TOC.js";
import Content from "./component/content.js";
import Subject from "./component/subject.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Subject: {
        title: "WEB",
        sub: "World Wide Web!!",
      },
    Contents: [
      {id: 1, title: "HTML", desc: "HTML is information"},
      {id: 2, title: "CSS", desc: "CSS is for Design"},
      {id: 3, title: "JavaScript", desc: "JavaScript is for interactive"}
    ]
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.Subject.title}
          sub={this.state.Subject.sub} />
        <Subject title="react" sub="for UI" />
        <TOC data={this.state.Contents} />
        <Content title="HTML" desc="HTML is HyperText Markup Language." />
      </div>
    );
  }
}

export default App;

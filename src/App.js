import React, { Component } from "react";
import TOC from "./component/TOC.js";
import Content from "./component/content.js";
import Subject from "./component/subject.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 2,
      Subject: {
        title: "WEB",
        sub: "World Wide Web!!",
      },
      Welcome: { title: "welcome", desc: "Hello, react!!" },
      Contents: [
        { id: 1, title: "HTML", desc: "HTML is information" },
        { id: 2, title: "CSS", desc: "CSS is for Design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  render() {
    console.log("App render");
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.Contents.length) {
        var data = this.state.Contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.Subject.title}
          sub={this.state.Subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        />
        <Subject title="react" sub="for UI" />
        <TOC
          onChangePage={function (id) {
            this.setState({ 
              mode: "read",
              selected_content_id: Number(id)
             });
          }.bind(this)}
          data={this.state.Contents}
        />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;

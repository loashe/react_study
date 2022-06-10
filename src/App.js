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
      Subject: {
        title: "WEB",
        sub: "World Wide Web!!",
      },
      Welcome: {title:"welcome", desc:"Hello, react!!"},
      Contents: [
        { id: 1, title: "HTML", desc: "HTML is information" },
        { id: 2, title: "CSS", desc: "CSS is for Design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.Contents[0].title;
      _desc = this.state.Contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject
          title={this.state.Subject.title}
          sub={this.state.Subject.sub}
        /> */}
      <header>
        <h1>
          <a href="/" onClick={ function (e) {
            console.log(e);
            e.preventDefault();
            this.setState({mode: "welcome"});
          }.bind(this)}>{this.state.Subject.title}</a>
        </h1>
        {this.state.Subject.sub}
      </header>
        <Subject title="react" sub="for UI" />
        <TOC data={this.state.Contents} />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;

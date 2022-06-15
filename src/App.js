import React, { Component } from "react";
import TOC from "./component/TOC.js";
import ReadContent from "./component/readContent.js";
import CreateContent from "./component/createContent.js";
import Subject from "./component/subject.js";
import Control from "./component/control.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
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
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />
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
      _article = <ReadContent title={_title} desc={_desc} />
    } else if(this.state.mode === "create"){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        var _contents = this.state.Contents.concat(
          {id: this.max_content_id, title: _title, desc: _desc}
        );
        this.setState({
          mode: "read",
          selected_content_id: this.max_content_id,
          Contents : _contents
        });
      }.bind(this)}/>
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
        <Control onChangeMode={ function(_mode){
          this.setState({
            mode: _mode
          });
        }.bind(this)}/>
        {_article}
      </div>
    );
  }
}

export default App;

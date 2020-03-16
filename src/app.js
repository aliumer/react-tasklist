import React from "react";
import TaskList from "./taskList";

let localData = require('../data/taskData.json');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: localData.data
    };    
  }


  render(){
    return (
    <TaskList tasks={this.state.tasks} />
    );
  }
}
export default App;

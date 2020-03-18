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

  taskActions = {
    delete: id => this.deleteTask(id),
    edit: t => this.editTask(t)
  }

  deleteTask(id) {
    console.log('deleting: ', id);
  }

  editTask(t) {
    console.log('editing:', t);
  }


  render(){
    return (
    <TaskList tasks={this.state.tasks} actions={this.taskActions} />
    );
  }
}
export default App;

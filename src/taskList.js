import React, {Component} from 'react';
import Task from './task';


const TaskList = (props) => {
  return (
    <div>
      {
        Object.values(props.tasks).map(t => <Task key={t.id} task={t} />)
      }
    </div>
  )
}

export default TaskList;
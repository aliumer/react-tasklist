import React, { Component } from 'react';

const styles = {
  task:{
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 25
  },

  button: {
    width: 60,
    height: 25
  },

  buttonDiv: {
    textAlign: 'right'
  },

  taskData: {
    padding: 20
  }
}

const Task = (props) => {
  return (
    <div style={styles.task}>
      <div>{props.task.id}</div>
      <div style={styles.taskData}>
        <span>{props.task.task}</span>
        <span>{props.task.status}</span>
      </div>
      <div style={styles.buttonDiv}>
        <button style={styles.button}>Edit</button>&nbsp;
        <button style={styles.button}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
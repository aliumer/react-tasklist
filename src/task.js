import React, { Component } from 'react';
import styles from './styles';

const Task = (props) => {
  const state = {
    action: 'init'
  }

  const onEdit = () => {
    state.action = 'edit';
    console.log(state);
    props.actions.edit(props.task);
  }
  
  const onDelete = () => {
    props.actions.delete(props.task.id);
  }

  return (
    <div style={styles.task}>
      <div>{props.task.id}</div>
      <div style={styles.taskData}>
        <span>{props.task.task}</span>
        <span style={styles.status}>{props.task.status}</span>
      </div>
      <div style={styles.buttonDiv}>
        <button onClick={onEdit} style={styles.button}>Edit</button>&nbsp;
        <button onClick={onDelete} style={styles.button}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
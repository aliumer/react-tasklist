import React, { Component } from 'react';

class Task extends React.Component {
    render() {
        return (
            <div>
                <div>Id</div>
                <div>TaskName</div>
                <div>Status</div>
                <div><button>Edit</button></div>
                <div><button>Delete</button></div>
            </div>
        )
    }
}

export default Task;
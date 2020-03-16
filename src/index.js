import React from "react";
import ReactDOM from "react-dom";
import TaskList from "./taskList";
import './index.css';  

class App extends React.Component {
  state = {
    answer: 43
  };

  asyncfunction = () => {
    return Promise.resolve(37);
  };

  async componentDidMount() {
    this.setState({
      answer: await this.asyncfunction()
    });
  }

  render(){
    return (
    <h3>Test {this.state.answer}</h3>
    );
  }
}
export default App;
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  
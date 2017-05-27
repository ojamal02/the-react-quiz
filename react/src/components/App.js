import React from 'react';
import Answers from './Answers';

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    let answers = this.props.data;
    return(
      <div>
        <h1>React Quiz!</h1>
        <ul>
        <Answers
        answers={answers}
        />
        </ul>
      </div>
    )
  }
}

export default App

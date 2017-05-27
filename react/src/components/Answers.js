import React from 'react';
import Answer from './Answer';

class Answers extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      message: null,
      selectedId: null
    }

    this.handleAnswerClick = this.handleAnswerClick.bind(this)
  }

  handleAnswerClick( correctStatus, id ) {

    this.setState( { selectedId: id } )

    if(correctStatus === true) {
      this.setState({ message: "Correct!" });
    } else {
      this.setState({ message: "Incorrect"});
    }
  }


  render(){
    let className;
    let answerList = this.props.answers.map((answer) => {

      if(answer.id === this.state.selectedId) {
        className = "selected"
      } else {
        className = ""
      }

      let onAnswerClick = () => this.handleAnswerClick(answer.correct, answer.id)

      return (
        <Answer
        key={answer.id}
        id={answer.id}
        body={answer.body}
        correct={answer.correct}
        handleClick={onAnswerClick}
        className={className}
        />
      );
    });

    return (
      <div>
      <ul>{answerList}</ul>
      <div>{this.state.message}</div>
      </div>
    )
  }
}

export default Answers;

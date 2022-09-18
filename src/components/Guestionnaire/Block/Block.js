import React from "react";
import { Guestion } from "../Guestion/Guestion";
import { Summary } from "../Summary/Summary";

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.questionCount = this.props.questions.length;
    this.state = {
      userAnswers: new Array(this.questionCount).fill({
        answer: "",
        isRight: false,
      }),
      isRightClass: new Array(this.questionCount).fill("unknown"),
      summaryShow: "hidden",
      right: 0,
    };
    this.handlerInput = this.handlerInput.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }
  
  handlerInput(text, n) {
    this.setState({
      userAnswers: this.state.userAnswers.map((elem, index) => {
        if (n === index) return { ...elem, answer: text };
        return { ...elem };
      }),
    });
  }

  handlerSubmit(event) {
    event.preventDefault();
    const rightAnswers = this.props.questions.map((elem) => elem.answer);
    const userAnswers = this.state.userAnswers;
    let right = 0;
    userAnswers.forEach((elem, index) => {
      if (elem.answer === rightAnswers[index]) {
        elem.isRight = true;
        right++;
      } else {
        elem.isRight = false;
      }
    });
    this.setState({
      isRightClass: this.state.isRightClass.map((elem, index) =>
        JSON.parse(userAnswers[index]["isRight"]) ? "right" : "wrong"
      ),
    });
    this.setState({ right: right });
    this.setState({ summaryShow: "show" });
    console.log(userAnswers);
  }

  render() {
    return (
      <div>
        <form>
          {this.props.questions.map((elem, index) => {
            const answer = this.state.userAnswers[index];
            return (
              <Guestion
                key={index}
                index={index}
                handlerInput={this.handlerInput}
                text={elem.question}
                value={answer.answer}
                isRight={this.state.isRightClass[index]}
              />
            );
          })}
          <input type="submit" onClick={this.handlerSubmit} />
        </form>
        <Summary
          summaryShow={this.state.summaryShow}
          right={this.state.right}
          possible={this.props.questions.length}
        />
      </div>
    );
  }
}

export { Block };

import { Component } from 'react';
// import css from './App.module.css';
import { Statistics } from './Statististics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = state => {
    this.setState(prevState => {
      return {
        [state]: prevState[state] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral } = this.state;
    let totalPositiveFeedback = good + neutral;
    let positiveFeedback =
      (totalPositiveFeedback / this.countTotalFeedback()) * 100;
    return Math.round(positiveFeedback);
  };

  render() {
    const { neutral, good, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleIncrement}
            options={options}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          {this.countTotalFeedback() === 0 && (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

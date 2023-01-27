import React, { Component } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, value) => total + value, 0);

  countPositiveFeedbackPercentage = () =>
    !this.state.good
      ? 0
      : Math.ceil((this.state.good / this.countTotalFeedback()) * 100);

  feedbackGoodCount = () => {
    this.setState(e => {
      return { good: e.good + 1 };
    });
  };
  feedbackNeutralCount = () => {
    this.setState(e => {
      return { neutral: e.neutral + 1 };
    });
  };
  feedbackBadCount = () => {
    this.setState(e => {
      return { bad: e.bad + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={this.feedbackGoodCount}
            neutral={this.feedbackNeutralCount}
            bad={this.feedbackBadCount}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

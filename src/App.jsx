import React, { Component } from 'react';
import Statistics from 'components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        {/* <Notification message="There is no feedback"></Notification>

      <Section title=""> */}
        {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
        {/* </Section> */}

        {/* // <Section title=""> */}
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={'total'}
          positivePercentage={'positivePercentage'}
        ></Statistics>
        {/* </Section> */}
      </div>
    );
  }
}

export default App;

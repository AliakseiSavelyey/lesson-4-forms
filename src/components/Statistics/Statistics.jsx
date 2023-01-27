import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <ul>
        <li>
          <p>
            Good:<span>{good}</span>
          </p>
        </li>
        <li>
          <p>
            Neutral:<span>{neutral}</span>
          </p>
        </li>
        <li>
          <p>
            Bad:<span>{bad}</span>
          </p>
        </li>
        <li>
          <p>
            Total:<span>{total}</span>
          </p>
        </li>
        <li>
          <p>
            Feedback:<span>{positivePercentage}%</span>
          </p>
        </li>
      </ul>
    );
  }
}

export default Statistics;

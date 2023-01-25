import React, { Component } from 'react';

class Statistics extends Component {
  total = this.props.good + this.props.neutral + this.props.bad;

  render() {
    const { good, neutral, bad } = this.props;

    return (
      <div>
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
              Total:<span>{this.total}</span>
            </p>
          </li>
          <li>
            <p>
              Feedback:<span></span>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;

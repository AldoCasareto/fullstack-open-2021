import React, { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const all = good + bad + neutral;
  const positive = (good * 100) / all;

  if (all === 0) {
    return 'No Feedback given';
  }

  return (
    <table>
      <tbody>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='all' value={all} />
        <Statistic text='average' value={average} />
        <Statistic text='positive' value={`${positive}%`} />
      </tbody>
    </table>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedback = () => setGood(good + 1);
  const neutralFeedback = () => setNeutral(neutral + 1);
  const badFeedback = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='Good' onClick={goodFeedback} />
      <Button text='Neutral' onClick={neutralFeedback} />
      <Button text='Bad' onClick={badFeedback} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;

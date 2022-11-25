// import React, { useState } from 'react';
import React from 'react';
import { Feedback } from './Feedback';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

// function App() {
//   const list = [
//     'Banana',
//     'Apple',
//     'Orange',
//     'Mango',
//     'Pineapple',
//     'Watermelon',
//   ];

//   const [filterList, setFilterList] = useState(list);
//   console.log([setFilterList]);

//   const handleSearch = event => {
//     if (event.target.value === '') {
//       setFilterList(list);
//       return;
//     }

//     const filteredValues = list.filter(
//       item =>
//         item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
//     );
//     setFilterList(filteredValues);
//   };
//   return (
//     <div>
//       <div>
//         Search: <input name="query" type="text" onChange={handleSearch} />
//       </div>
//       {filterList &&
//         filterList.map((item, index) => <div key={index}>{item}</div>)}
//     </div>
//   );
// }

// export default App;

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerChange = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (100 - ((neutral + bad) * 100) / total).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <h2>Please leave Feedback</h2>
        <Feedback
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handlerChange}
        />
        <div>
          <h2>Statistics</h2>
          {/* {this.countTotalFeedback() === 0 && (
            <Notification message="There is no feedback"></Notification>
          )} */}
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        </div>
      </>
    );
  }
}

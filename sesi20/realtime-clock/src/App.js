import React, { useEffect, useState } from 'react';
import './App.css';

// * CLASS
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       date: new Date(),
//     };
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   render() {
//     return (
//       <div className='App'>
//         <h1>Realtime CLOCK</h1>
//         <hr />
//         <h1>{this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     );
//   }
// }

// * Function
export const App = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='App'>
      <h1>Realtime CLOCK</h1>
      <hr />
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Counter berhasi dibuat');
  }, []);

  useEffect(
    () => {
      //   componentDidMount()
      if (counter > 0) console.log('State counter berubah');
      // cleanup componentWillUnmount()
      return () => {};
    },
    //   shouldComponentUpdate()
    [counter]
  );

  return (
    <div>
      <h2>Let's count!</h2>
      <h3>{counter}</h3>
      <button
        onClick={() => setCounter(counter + 1)}
        style={{ fontSize: '2em' }}
      >
        Hit me!
      </button>
    </div>
  );
};

export default Counter;

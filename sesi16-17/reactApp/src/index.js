import React from 'react';
import ReactDom from 'react-dom';

const HelloWorld = () => {
  return <h1>Hello World</h1>;
};

ReactDom.render(<HelloWorld />, document.getElementById('root'));

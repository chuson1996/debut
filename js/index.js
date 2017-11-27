import React from 'react';
import { render } from 'react-dom';

function getProps(dom) {
  const props = {};
  dom.querySelectorAll('input[type="hidden"]').forEach((dom) => {
    props[dom.name] = dom.value;
  });
  return props;
}

function App({ line1, line2 }) {
  return (
    <button onClick={() => alert('work!')}>
      {line1}:{line2}
    </button>
  );
}

const dom = document.querySelector('.some-weird-button');
if (dom) {
  render(<App {...getProps(dom)}/>, document.querySelector('.some-weird-button'));
}


function App2(props) {
  return (
    <button onClick={() => alert('work2!')}>
      abc432
    </button>
  );
}

const dom2 = document.querySelector('.some-weird-button2');
if (dom2) {
  render(<App2/>, document.querySelector('.some-weird-button2'));
}

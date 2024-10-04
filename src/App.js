import logo from './logo-vives.svg';
import './App.css';
import Counter from './Counter.js'
import React, { Fragment, useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  return (
  <>
  <Counter setTotal={setTotal} /> <hr />
  <Counter setTotal={setTotal} focus={true} /> <hr />
  <Counter setTotal={setTotal} /> <hr />
  <b>Total : {total}</b>
  </>
  )
}

export default App;

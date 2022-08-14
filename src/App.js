import './App.css';
import data from './data';
import List from './List';
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <section className='card'>
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button className='btn' onClick={() => setPeople([])}>
        clear all
      </button>
    </section>
  );
}

export default App;

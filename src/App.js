import React from 'react';
import './App.css';
import words from '../src/data/words_list.json';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Words_table from './components/Words_table/Words_table';

function App() {
  return (
    <React.Fragment>
      <div className='container_app'>
        <Header />
        <Cards />
        <Words_table />
      </div>
    </React.Fragment>
  );
}

export default App;

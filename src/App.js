import React from 'react';
import './App.css';
import Card from './Card.js';
import List from './List.js';

function App(props) {
  console.log(props.store); // this is should now contain the object from store.js
  return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <List />
        <div className='App-list'>
          <header className="List-header">
            <Card title='First Card' content='Snake' />
            <Card title='First Card' content='Snake' />
            <Card title='First Card' content='Snake' />
            <Card title='First Card' content='Snake' />
          </header>
        </div>
          














      </main>

  );
}
export default App;
import React from 'react';
import store from './store.js';
import './App.css';
import './Card.css';

function App(props) {
  console.log(props.store); // this should now contain the object from store.js
  return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          <header className="List-header">
            <h2>First list</h2>
          </header>
        </div>
          














      </main>

  );
}
export default App;
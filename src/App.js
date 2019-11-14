import React from 'react';
import './App.css';
import Card from './Card.js';
import store from './store.js'
import List from './List.js';

function App() {
  // console.log(store); // this is should now contain the object from store.js
  // console.log(store.allCards)
  // const deck = store.allCards.map(card => {
  //  return <Card key={card.id} title={card.title} content={card.content} /> 
  // })
  const cardList = store.lists.map(list => {
    console.log(list.cardIds)
    const foundCards = []
    for (let i = 0; i < list.cardIds.length; i++) {
      const currentLetter = list.cardIds[i]
      const foundCard = store.allCards[currentLetter]
      foundCards.push(foundCard)
      console.log(foundCards)
    }
    return <List key={list.id} id={list.id} header={list.header} cardIds={list.cardIds} cards={foundCards} />
  })
  return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {cardList}
        </div>
          














      </main>

  );
}
export default App;
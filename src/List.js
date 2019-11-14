import React from 'react';
import './List.css';
import Card from './Card.js';

function List(props) {
    console.log(props)
    const deck = props.cards.map(card => {
   return <Card key={card.id} title={card.title} content={card.content} /> 
  })
    return (
        <div>
            <section className="List">
                <header className='List-header'>
                    <h2>{props.header}</h2>

                </header>

                <div className="List-cards">
                    {deck}
                </div>
            </section>
        </div>

    )
}

export default List
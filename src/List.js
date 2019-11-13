import React from 'react';
import './List.css';

function List(props) {
    return (
        <div>
            <section className="List">
                <header className='List-header'>
                    <h2>{props.header}</h2>
                </header>

                <div className="List-cards">

                </div>
            </section>
        </div>

    )
}

export default List
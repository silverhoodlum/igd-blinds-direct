import React from 'react';

import Card from '../card/card.component'

import '../card-list/card-list.styles.scss'

const CardList = props =>(
        <div className="card-list">
            {props.blinds.map(({...otherprops}, index) => (
                    <Card key={index}{...otherprops}/>         
            ))}
        </div>
)


export default CardList;
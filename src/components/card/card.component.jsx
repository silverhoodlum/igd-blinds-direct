import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardModal from '../card-modal/card-modal.component';
import '../card/card.styles.scss';


const Card = ({name, limits, price_per_metre_squared, images, ...otherProps }) => {
    {/* calculate minimum price and store in const*/} 
    const minimumPrice = (limits.width.min * limits.drop.min * price_per_metre_squared/10000).toFixed(2);
    return(
            <div className='card'>
                <img alt="blind" src={images.thumb} />
                <p className="title font-weight-bold">{name}</p>
                <p className="minimum-price">From £{minimumPrice}</p>              
                <CardModal  name={name} limits={limits}images={images}price_per_metre_squared={price_per_metre_squared}{...otherProps}/>
                
            </div>
    )
}

export default Card;
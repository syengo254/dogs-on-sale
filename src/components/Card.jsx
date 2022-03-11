import React from 'react';
import './card.css';

const Card = (props) => {
    const { breed, image, price, rating } = props.dog;
    const stars = [...Array(rating)].map( _ => '★' );
    const emptys = [...Array((5 - rating))].map( _ => '☆' );

    return ( 
        <div className='card'>
            <img src={`../${image}`} className='card--image' alt={breed} />
            <div className='card-info'>
                <div className='card-breed'>{breed}</div>
                <div className='card-price'>{price} <button className='buy-btn' type='button'>Buy</button></div>
                <div className='card-rating'>Rated: { stars }{ emptys }</div>
            </div>
        </div>
     );
}
 
export default Card;
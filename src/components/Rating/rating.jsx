import React from 'react';
import './rating.scss';
import activeStar from '../../assets/star-active 1.svg';
import inactiveStar from '../../assets/star-inactive 1.svg';

function Rating (rental) {
    const ratings = [1, 2, 3, 4, 5]
    return (
        <div className="rating">
            {ratings.map((elem) => rental.rating >= elem ?
            <img key={elem} src={activeStar} alt="RatingStar" /> :
            <img key={elem} src={inactiveStar} alt="RatingStar" />)}
        </div>
    )
}

export default Rating
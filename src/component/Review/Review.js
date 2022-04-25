import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ review }) => {
    const { name, comment, rating } = review;

    return (
        <div className='border-2 rounded-lg m-2 p-8'>
            <p className='font-bold'>Name: {name}</p>
            <p className='text-justify m-2'> {comment}</p>
            <Rating
                initialRating={rating}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                readonly
            ></Rating>
        </div>
    );
};

export default Review;
import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='my-10'>
            <h4 className='text-2xl'>Customer Reviews({reviews.length})</h4>
            <div className='grid grid-cols-1 md:grid-cols-3 m-8 md:m-20'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import HomeReviews from '../HomeReviews/HomeReviews';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const homeReviews = (reviews.slice(6));

    const { aboutId } =useParams()

    const { reviewId } = useParams();

    const navigate = useNavigate();

    const getAbout = () => {
        navigate('/about')
    }

    const getAllReview = () => {
        navigate('/reviews')
    }
    return (
        <div>
            <div className='lg:flex justify-evenly items-center'>
                <div className='p-4 text-center'>
                    <h1 className='text-6xl'>Order Your <span className='text-yellow-300'>Best Shoz</span></h1>
                    <p className='text-justify m-4 p-4'>Ever since luxury sneakers found their sartorial footing, they have become an essential element of every man's casual wardrobe, providing comfort and coolness to any outfit for men.</p>
                    <button onClick={() => getAbout(aboutId)} className='border-4 rounded-lg bg-yellow-400 py-2 px-4'>About More</button>
                </div>
                <img className='w-auto h-[700px] md:m-8 p-6' src="https://fns.modanisa.com/r/pro2/2019/06/25/z-spor-ayakkabi--siyah--pasomia-1127658-1127658-1.jpg" alt="" />
            </div>
            <div className='my-10'>
                <h4 className='text-2xl'>Customer Reviews({reviews.length})</h4>
                <div className='grid grid-cols-1 md:grid-cols-3 m-8 md:m-20'>
                    {
                        homeReviews.map(review => <HomeReviews
                            key={review.id}
                            review={review}
                        ></HomeReviews>)
                    }
                </div>
                <div >
                    {homeReviews.length === 3 && <button className='border-4 rounded-lg bg-yellow-400 py-2 px-4' onClick={() => getAllReview(reviewId)}>See All Reviews</button>}
                </div>
            </div>
        </div>
    );
};

export default Home;
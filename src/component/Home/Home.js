import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {
    const { reviewId } = useParams();

    const navigate = useNavigate();

    const getMoreShop = () => {
        navigate('/reviews')
    }
    return (
        <div>
            <div className='lg:flex justify-evenly items-center'>
                <div className='p-4 text-center'>
                    <h1 className='text-6xl'>Order Your <span className='text-rose-300'>Best Shoz</span></h1>
                    <p className='text-justify p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi veniam quidem sapientevero voluptatibus ipsam, quos fugiat doloremque rem iure mollitia quisquam dicta aspernatur voluptatum consequuntur quidem natus labore sint! Quisquam eaque porro temporibus fugit ea!</p>
                    <button onClick={() => getMoreShop(reviewId)} className='border-4 rounded-lg bg-blue-300 py-2 px-4'>Go Shop</button>
                </div>
                <img className='w-auto h-[700px] md:m-12 p-6' src="https://fns.modanisa.com/r/pro2/2019/06/25/z-spor-ayakkabi--siyah--pasomia-1127658-1127658-1.jpg" alt="" />
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Home;
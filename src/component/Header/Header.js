import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='h-[80px] bg-[#1C2B35] flex items-center justify-center'>
            <div className='md:mx-10'>
                <CustomLink className='text-white no-underline md:text-lg pl-6' to="/home">Home</CustomLink>
                <CustomLink className='text-white no-underline md:text-lg pl-6' to="/reviews">Reviews</CustomLink>
                <CustomLink className='text-white no-underline md:text-lg pl-6' to="/dashboard">Dashboard</CustomLink>
                <CustomLink className='text-white no-underline md:text-lg pl-6' to="/blogs">Blogs</CustomLink>
                <CustomLink className='text-white no-underline md:text-lg pl-6' to="/about">About</CustomLink>
            </div>
        </nav>
    );
};

export default Header;
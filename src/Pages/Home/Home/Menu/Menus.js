import React from 'react';
import Menu from './Menu';

const Menus = () => {
    return (
        <div className='my-28 max-w-7xl mx-auto px-12'>
            <div className='text-center'>
                <h3 className="lg:text-6xl lg:font-bold sm:text-2xl">Our <span className="text-warning underline">𝘔𝘦𝘯𝘶</span></h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <Menu></Menu>
            </div>
        </div>
    );
};

export default Menus;
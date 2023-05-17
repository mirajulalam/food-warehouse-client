import React from 'react';

const Menu = () => {
    return (
        <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
            <figure className="px-10 pt-10">
                <img src="hello" alt="Shoes" className=" w-full" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">Nam</h2>
                <p></p>
                <p>Price: $</p>
                <p>MinimumOrderQuantity:</p>
                <p>AvailableQuantity: </p>
                <div className="card-actions text-center">
                    <button  className="btn btn-outline btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Menu;
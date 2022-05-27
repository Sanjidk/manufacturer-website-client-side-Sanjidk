import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = (props) => {
    const { _id, name, img, price, description, minimumQuantity, availableQuantity } =
        props.tool;

    const navigate = useNavigate();

    const navigateItems = (id) => {
        navigate(`/tool/${id}`);
    };
    return (
        <div className="col">
            <div className="lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Tools" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <p className='text-2xl font-medium'>Laptop: {name}</p>
                    <p className='font-bold'>Price: ${price}</p>
                    <p className='text-1xl font-medium text-green-600'>Minimum Order Quantity: {minimumQuantity}</p>
                    <p className='text-1xl font-medium text-blue-600'>Available Quantity: {availableQuantity}</p>
                    <p className="text-left mt-2">{description}</p>
                    <button onClick={() => navigateItems(_id)} className="border-0 bg-primary w-100 rounded text-white fw-bold p-2">Buy Now</button>
                </div>
            </div>
        </div>


    );
};

export default Tool;
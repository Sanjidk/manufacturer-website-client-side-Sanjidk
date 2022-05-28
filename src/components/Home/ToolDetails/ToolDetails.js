import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ToolDetails = () => {

    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const { _id, name, img, price, description, minimumQuantity, availableQuantity } = tool;

    const [newQuantity, setNewQuantity] = useState(10);


    useEffect(() => {
        const url = `https://sleepy-journey-49745.herokuapp.com/tool/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setTool(data);
            });
    }, [id, tool]);


      const userName = user?.displayName;
      const userEmail = user?.email;


    const handleOrder = e => {
        e.preventDefault();

        const address = e.target.address.value;
        const order = {
            orderId: _id,
            name,
            price: price * newQuantity,
            orderQuantity: newQuantity,
            address,
            user: user.email,
            userName: user.displayName,
            phone: e.target.phone.value
        
        }

        fetch('https://sleepy-journey-49745.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(`Your Order is Placed`)
                }
                setTool(null);
            });

    }


    return (
        <div className="w-3/4 mx-auto">
            <div className="">
                <h1 className="text-center text-4xl font-bold  text-primary my-8 flex flex-col items-center">
                    Parts Details
                </h1>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img src={img} alt="" />
                    </figure>
                    <div className="card-body  bg-gray-100">
                        <h2 className="font-bold text-center text-2xl">{name}</h2>
                        <div>
                            <h2 className="my-2">
                                <strong>Description: </strong>
                                {description}
                            </h2>
                            <h2 className="my-2">
                                <strong>Minimum Order Quantity: </strong>
                                {minimumQuantity}
                            </h2>
                            <h2 className="my-2">
                                <strong>Available Order Quantity: </strong>
                                {availableQuantity}
                            </h2>
                            <h2 className="my-4">
                                <strong>Price ($): </strong>
                                <div className="indicator">
                                    {price}
                                </div>
                            </h2>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-secondary bg-gradient-to-r from-secondary to-accent lg:w-3/4 mx-auto rounded-xl py-5 my-5">
                <h1 className='text-white text-3xl text-center font-bold'>Place Your Order Here...</h1>
                <form onSubmit={handleOrder}>
                    <div className="card-body">
                        <div className="form-control lg:w-4/5 mx-auto">
                            <input type="text" name="userName" value={userName} className="input input-bordered my-2" readOnly
                                disabled />
                            <input type="email" name="userEmail" value={userEmail} className="input input-bordered my-2" readOnly
                                disabled />

                            <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered my-2" required />

                            <textarea name="address" className="textarea textarea-bordered my-4" placeholder="Address" required></textarea>

                            <input onChange={(e) => setNewQuantity(e.target.value)} type="number" name="quantity"  min="10" max={availableQuantity} placeholder="Order quantity, minimum 10" className="input input-bordered input-primary w-full max-w-xs" required />

                            <button disabled={!newQuantity || newQuantity > availableQuantity} type="submit" name="order" className="border-0 bg-primary w-full max-w-xs rounded text-white fw-bold p-2">Buy Now</button>



                        </div>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default ToolDetails;



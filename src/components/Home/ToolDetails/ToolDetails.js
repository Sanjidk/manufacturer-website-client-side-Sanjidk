import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ToolDetails = () => {

    const { id } = useParams();
    const [tool, setTool] = useState({});
    const { _id, name, img, price, description, minimumQuantity, availableQuantity } = tool;

    useEffect(() => {
        const url = `http://localhost:5000/tool/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setTool(data);
            });
    }, [id, tool]);


    return (
        <div className="m-3 p-3 text-start">
            <div className="d-flex p-2">
                <div className="card w-50 shadow-lg border-0 p-3">
                    <h4 className="card-title center">Brand: {name}</h4>
                    <div className="flex">
                        <div className="">
                            <img
                                src={img}
                                className="card-img-top w-100 mx-auto"
                                alt="..."
                            />
                        </div>
                        <div className="p-3">
                            <h4>Price: ${price}</h4>
                            <p className='text-1xl font-medium text-green-500'>Minimum Quantity: {minimumQuantity}</p>
                            <p className='text-1xl font-medium text-blue-600'>Available Quantity: {availableQuantity}</p>
                            <p className="card-text ">Short Details: {description}</p>
                            <button className="btn btn-primary mt-3"
                            >
                                Order{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolDetails;
import React from 'react';

const AddProduct = () => {



    const handlePostProduct = (e) => {
        e.preventDefault()
        const partName = e.target.name.value;
        const description = e.target.description.value;
        const img = e.target.image.value;
        const quantity = parseInt(e.target.quantity.value);
        const price = parseInt(e.target.price.value);

        const part = {
            name: partName,
            discription: description,
            img,
            quantity,
            price
        }

        fetch('https://sleepy-journey-49745.herokuapp.com/tool', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(part)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    alert('product added successfully')
                    // reset()
                }

            })

    }

    return (
        <div>
            <h2 className='text-3xl font-bold text-purple-500 mt-5'>Add New Product</h2>
            <form onSubmit={handlePostProduct} >

                <div className='flex flex-col w-96 bg-blue-300 rounded-xl shadow-xl p-5 mt-5'>
                    <input type="text" name="name" placeholder="Product Name" className="input input-bordered input-primary w-full max-w-xs m-2" />
                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered input-primary w-full max-w-xs m-2" />
                    <input type="text" name="description" placeholder="Description" className="input input-bordered input-primary w-full max-w-xs m-2" />
                    <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered input-primary w-full max-w-xs m-2" />
                    <input type="number" name="price" placeholder="Price" className="input input-bordered input-primary w-full max-w-xs m-2" />

                    <input type="submit" value="Add Product" className='btn btn-primary  mt-3 text-white w-full max-w-xs' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DeleteProductModal from '../DeleteProductModal/DeleteProductModal';

const ManageProducts = () => {
    const [product, setProduct] = useState(null);
    const { data: tools, isLoading } = useQuery('parts', () => fetch(`https://sleepy-journey-49745.herokuapp.com/tool`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    console.log(tools.length)
    return (
        <div>
            <h2 className='text-2xl font-bold text-purple-500'>Manage your all Products</h2>
            <div className="overflow-x-auto">
                <table className="table  lg:w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>quantity</th>
                            <th>price</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((ap, index) => <tr key={ap._id}>
                                <th>{index + 1}</th>
                                <td>{ap.name}</td>
                                <td>{ap.quantity}</td>
                                <td>{ap.price}</td>
                                <td className='card-actions'>
                                    <button onClick={() => setProduct(ap)} className='btn btn-xs bg-red-600 py-3 text-white delete-modal'> Delete
                                </button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {product && <DeleteProductModal product={product} setProduct={setProduct}></DeleteProductModal>}
        </div>
    );
};

export default ManageProducts;
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import UserRow from '../UserRow/UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://sleepy-journey-49745.herokuapp.com/user`, {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl mt-5 font-bold">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map ((user , index) => <UserRow
                           key={user._id}
                           user={user}
                           index={index}
                           refetch={refetch}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
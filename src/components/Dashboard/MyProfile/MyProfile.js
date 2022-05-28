import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const handleUpdate = async data => {
        data.preventDefault()
        const newName = data.target.name.value;
        const newEmail = data.target.email.value;
        const education = data.target.education.value;
        const location = data.target.location.value;
        const phone = parseFloat(data.target.phone.value);
        const linkedin = data.target.linkedin.value;
        const photo = data.target.photo.value;


        await updateProfile({
            displayName: newName ? newName : user.displayName,
            photoURL: photo,
            phoneNumber: phone,
            education,
            email: newEmail ? newEmail : user.email,
            location,
            linkedin
        });

    }
    if (updating) {
        return <Loading />
    }
    if (error) {
        console.log(error)
    }
    return (
        <div className='sm:mr-px justify-center items-center'>
            <h2 className='text-2xl font-bold text-purple-500 mt-5'>Please Update Your Profile</h2>
            <div className=''>
                <form onSubmit={handleUpdate} >
                    <div className='flex flex-col w-96 bg-green-300 rounded-xl shadow-xl p-5 mt-5'>
                    <input type="text" name="name" value={user.displayName} className="input input-bordered input-primary w-full max-w-xs m-2" />
                    <input type="email" name="email" value={user.email} className="input input-bordered input-primary w-full max-w-xs m-2" />
                    <input type="text" name="education" placeholder="Education" className="input input-bordered input-primary w-full max-w-xs m-2" />
                    <input type="text" name="location" placeholder="Location" className="input input-bordered input-primary w-full max-w-xs m-2" />
                    <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs m-2" />
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered input-primary w-full max-w-xs m-2" />

                    <input type="submit" value="update profile" className='btn btn-primary  mt-3 text-white w-full max-w-xs' />
                </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
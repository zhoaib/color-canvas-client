import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                setAuthToken(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='mb-10 mx-auto '>
            <button onClick={handleGoogleSignIn} className="btn btn-primary ">Sign in With Google</button>
        </div>
    );
};

export default SocialLogin;
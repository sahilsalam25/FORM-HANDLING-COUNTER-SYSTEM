import React from 'react';
import { useAuth } from './AuthProvider';

const SignIn = () => {
    const { signInWithGoogle } = useAuth();

    const handleSignIn = () => {
        signInWithGoogle();
    };

    return (
        <div>
            <h2>Sign In</h2>
            <button onClick={handleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default SignIn;

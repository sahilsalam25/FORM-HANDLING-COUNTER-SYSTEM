import React from 'react';
import { useAuth } from './AuthProvider';

const SignUp = () => {
    const { signUp } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock validation
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        signUp(formData);
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;

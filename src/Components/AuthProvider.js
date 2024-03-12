// import React, { useContext, useState, useEffect } from 'react';
// import { auth, provider } from './firebase'; // Firebase setup

// const AuthContext = React.createContext();

// export const useAuth = () => {
//     return useContext(AuthContext);
// };

// const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);

//     const signInWithGoogle = async () => {
//         try {
//             const result = await auth.signInWithPopup(provider);
//             setCurrentUser(result.user);
//         } catch (error) {
//             console.error('Google sign-in error:', error.message);
//         }
//     };

//     const signUp = async (formData) => {
//         // Mock validation, you can replace this with Firebase authentication
//         console.log('Sign up with:', formData);
//     };

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged((user) => {
//             setCurrentUser(user);
//         });

//         return unsubscribe;
//     }, []);

//     const value = {
//         currentUser,
//         signInWithGoogle,
//         signUp,
//     };

//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;

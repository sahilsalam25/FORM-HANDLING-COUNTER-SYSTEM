

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './UserDataForm.css';
const UserDataForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: ''
    });
    const [unsavedChanges, setUnsavedChanges] = useState(false);

    // Effect to detect unsaved changes when form data changes
    useEffect(() => {
        const handleWindowClose = (event) => {
            if (unsavedChanges) {
                const confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
                event.returnValue = confirmationMessage;
                return confirmationMessage;
            }
        };

        window.addEventListener('beforeunload', handleWindowClose);

        return () => {
            window.removeEventListener('beforeunload', handleWindowClose);
        };
    }, [unsavedChanges]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setUnsavedChanges(true);


    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Autogenerate user ID
        const userId = generateUserId();
        // Save data to local storage 
        saveUserData(userId, formData);

        // Reset form data and unsavedChanges state
        setFormData({
            name: '',
            address: '',
            email: '',
            phone: ''
        });
        setUnsavedChanges(false);
    };

    const generateUserId = () => {
        // Generate user ID, everytime unique UUID 
        return uuidv4();
    };

    const saveUserData = (userId, data) => {
        // Save data logic  (local storage )
        const userData = JSON.stringify({ userId, data });
        localStorage.setItem('userData', userData);
        console.log('Saving data for user:', userId, data);
    };

    return (
        <div>
            <h2>User Data Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                <button type="submit" >Submit</button>
            </form>

        </div>
    );
};

export default UserDataForm;

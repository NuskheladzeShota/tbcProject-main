import React, { useState } from 'react';
import '../Styles/Profile.css';

const initialUser = {
    firstName: "Shota",
    lastName: "Nuskheladze",
    email: "Nuskheladze@example.com",
    picture: "https://via.placeholder.com/150",
};

export default function Profile() {
    const [user, setUser] = useState(initialUser);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser({ ...user, picture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="profile-page">
            <div className="profile-content">
                <div className="profile-card">
                    <h1 className="profile-title">Profile Details</h1>
                    <img 
                        src={user.picture} 
                        alt={`${user.firstName} ${user.lastName}`} 
                        className="profile-picture" 
                    />
                    <form className="profile-form">
                        <div className="form-group">
                            <label htmlFor="file">Change Picture</label>
                            <input
                                type="file"
                                id="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={user.firstName}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={user.lastName}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </div>
                        <button type="button" className="edit-button" onClick={toggleEdit}>
                            {isEditing ? 'Save Changes' : 'Edit Profile'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

import React from "react";
//import "./profile.css"; // Optional if you want a separate CSS file, otherwise paste in App.css

const Profile = () => {
    // Sample user data
    const user = {
        fullName: "Mujadded Chowdhury",
        email: "mujadded@aust.edu",
        profilePic: "https://via.placeholder.com/150", // placeholder image
        joinedDate: "21-08-2024"
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <img 
                    src={user.profilePic} 
                    alt="Profile" 
                    className="profile-pic"
                />
                <h2 className="profile-name">{user.fullName}</h2>
                <p className="profile-email">{user.email}</p>
                <p className="profile-joined">Joined: {user.joinedDate}</p>
            </div>
        </div>
    );
}

export default Profile;

import React from "react";
import logo from './logo.jpg'

const ProfilePage = () => {
  return (
    <div className="profile-page">
      {/* Internal CSS */}
      <style>
        {`
          .profile-page {
            width: 100%;
            min-height: 100vh;
            background: #f5f5f5;
            padding: 40px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }

          .profile-card {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            width: 70%;
            max-width: 900px;
            text-align: center;
          }

          .profile-avatar img {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #ddd;
            margin-bottom: 20px;
          }

          .profile-info h2 {
            margin: 0;
            font-size: 2rem;
            font-weight: 600;
            color: #333;
          }

          .profile-info p {
            margin: 10px 0;
            font-size: 1.1rem;
            color: #555;
          }

          .profile-info .highlight {
            font-weight: 600;
            color: #000;
          }

          .profile-section {
            margin-top: 30px;
            text-align: left;
          }

          .profile-section h3 {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: #333;
          }

          .profile-section ul {
            list-style-type: disc;
            padding-left: 20px;
            margin: 0;
          }

          .profile-section li {
            margin-bottom: 10px;
            font-size: 1rem;
            color: #444;
          }

          .profile-section a {
            color: #007bff;
            text-decoration: none;
          }

          .profile-section a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div className="profile-card">
        {/* Profile Picture */}
        <div className="profile-avatar">
          <img
            src={logo}
            alt="Profile"
          />
        </div>

        {/* Basic Info */}
        <div className="profile-info">
          <h2>Mujadded Chowdhury</h2>
          <p><span className="highlight">Email:</span> mujaddedc@gmail.com</p>
          <p><span className="highlight">Phone:</span> 01749296596</p>
          <p><span className="highlight">Date of Joining:</span> 18 June, 2022</p>
        </div>

        {/* Previous Experiences */}
        <div className="profile-section">
          <h3>Previous Experiences</h3>
          <ul>
            <li>Content Writer at PC Builder Bangladesh (2019 - 2021)</li>
            <li>Freelance Copywriter (2017 - 2019)</li>
            <li>Intern at Dr Computers (2016 - 2017)</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="profile-section">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

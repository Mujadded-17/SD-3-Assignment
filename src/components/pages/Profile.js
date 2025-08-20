import React from "react";


const Profile = () => {
  return (
    <div className="profile-page">
      {/* Top Section */}
      <div className="profile-header">
        <div className="profile-avatar">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
        </div>
        <div className="profile-info">
          <h2>John Doe</h2>
          <p className="profile-email">
            <a href="mailto:ryan@rockettheme.com">ryan@rockettheme.com</a> - Administrator
          </p>
          <p className="profile-subtext">
            Avatar by <a href="https://gravatar.com">gravatar.com</a>. Or upload your own…
          </p>
          <div className="upload-box">
            Drop your files here or <span>click in this area</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="profile-form">
        <h3>Account</h3>
        <form>
          <label>Username</label>
          <input type="text" value="ryan" readOnly />

          <label>Email <span className="required">*</span></label>
          <input type="email" value="ryan@example.com" />

          <label>Password</label>
          <input type="password" value="********" />

          <label>Full Name</label>
          <input type="text" value="John Doe" />

          <label>Title</label>
          <input type="text" value="Administrator" />

          <label>Language</label>
          <select>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>

          <button type="submit" className="save-btn">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

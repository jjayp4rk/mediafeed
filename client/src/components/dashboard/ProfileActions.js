import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn">
        ✏️ Edit Profile
      </Link>
      <Link to="/add-experience" className="btn">
        💼 Add Experience
      </Link>
      <Link to="/add-education" className="btn">
        📚 Add Education
      </Link>
    </div>
  );
};

export default ProfileActions;

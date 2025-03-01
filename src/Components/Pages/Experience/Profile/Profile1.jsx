import PropTypes from 'prop-types';
import { Camera } from 'lucide-react';

const Profile = ({ user, onProfileUpdate }) => {
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      onProfileUpdate(file);
    }
  };

  return (
    <div className="p-6 sticky top-0">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-32 h-32 mt-4">
          <img
            src={user.profilePic || "/public/ReactMF_pwabuilder_score.png"}
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
          <label className="absolute bottom-0 right-0 bg-green-500 rounded-full p-2 cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleProfilePicChange}
            />
            <Camera className="w-4 h-4 text-white" />
          </label>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            {user.role}
          </span>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    profilePic: PropTypes.string
  }).isRequired,
  onProfileUpdate: PropTypes.func.isRequired
};

export default Profile;
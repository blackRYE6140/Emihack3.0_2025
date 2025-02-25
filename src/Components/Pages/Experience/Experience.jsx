import { useState } from 'react';
import PostCreation from './PostCreation/PostCreation';
import Feed from './Feed/Feed';
import Profile from './Profile/Profile1';
import '../../../assets/css/Experience.css'

const Experience = () => {
  const [user, setUser] = useState({
    name: 'Ethan',
    email: 'ethanrafalimanana.com',
    role: 'Developpeur',
    profilePic: '/ReactMF_pwabuilder_score.png'
  });

  const [posts, setPosts] = useState([]);

  const handleProfileUpdate = (newProfilePic) => {
    setUser(prev => ({
      ...prev,
      profilePic: URL.createObjectURL(newProfilePic)
    }));
  };

  const handleNewPost = (postData) => {
    const newPost = {
      id: Date.now(),
      userId: user.name,
      userPic: user.profilePic,
      timestamp: new Date().toLocaleString(),
      ...postData
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-y-auto ">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 min-h-0">
        {/* Profile Section */}
        <div className="h-full bg-gray-50 ">
          <Profile user={user} onProfileUpdate={handleProfileUpdate} />
        </div>

        {/* Post Creation Section */}
        <div className="h-full bg-white">
            <PostCreation onPost={handleNewPost} />
        </div>

        {/* Feed Section */}
        <div className="h-full bg-gray-50">
          <Feed posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
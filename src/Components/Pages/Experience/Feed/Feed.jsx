import PropTypes from 'prop-types';

const Feed = ({ posts }) => {
  return (
    <div className="p-4 space-y-4">
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={post.userPic || "/public/ReactMF_pwabuilder_score.png"}
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">{post.userId}</h3>
              <p className="text-sm text-gray-500">{post.timestamp}</p>
            </div>
          </div>
          
          {post.text && (
            <p className="text-gray-800 mb-4">{post.text}</p>
          )}
          
          {post.type === 'image' && (
            <img
              src={post.imageUrl }
              alt="Post"
              className="w-full rounded-lg"
            />
          )}

          {post.type === 'audio' && (
            <audio controls className="w-full mt-2">
              <source src={post.audioUrl} type="audio/webm" />
              Votre navigateur ne supporte pas l&apos;élément audio.
            </audio>
          )}
          
          <div className="flex gap-4 mt-4 text-gray-500">
            <button className="flex items-center gap-1 hover:text-green-500">
              ❤️ <span>0</span>
            </button>
            <button className="flex items-center gap-1 hover:text-green-500">
              💬 <span>0</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Feed.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.string.isRequired,
      userPic: PropTypes.string,
      type: PropTypes.oneOf(['text', 'image', 'audio']).isRequired,
      timestamp: PropTypes.string.isRequired,
      text: PropTypes.string,
      imageUrl: PropTypes.string,
      audioUrl: PropTypes.string
    })
  ).isRequired
};

export default Feed;
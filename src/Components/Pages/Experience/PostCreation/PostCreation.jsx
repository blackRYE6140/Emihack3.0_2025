import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Camera, Mic, Send, Square, X } from 'lucide-react';

const PostCreation = ({ onPost }) => {
  const [postText, setPostText] = useState('');
  const [recording, setRecording] = useState(false);
  const [tempImage, setTempImage] = useState(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const handlePost = () => {
    if (tempImage) {
      // Post avec image et légende
      onPost({
        type: 'image',
        text: postText,
        imageUrl: tempImage
      });
    } else if (postText.trim()) {
      // Post texte uniquement
      onPost({
        type: 'text',
        text: postText
      });
    }
    
    // Réinitialiser le formulaire
    setPostText('');
    setTempImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setTempImage(URL.createObjectURL(file));
    }
  };

  const removeTempImage = () => {
    setTempImage(null);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        if (postText.trim()) {
          onPost({
            type: 'audio',
            text: postText,
            audioUrl: audioUrl
          });
          setPostText('');
        }
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div className="p-6 sticky top-4 bg-white">
      <textarea
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="Écrivez votre légende..."
        className="w-full p-3 border rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* Prévisualisation de l'image */}
      {tempImage && (
        <div className="relative mt-4">
          <img 
            src={tempImage} 
            alt="Preview" 
            className="w-full h-48 object-cover rounded-lg"
          />
          <button
            onClick={removeTempImage}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-4 mt-4">
        <label className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-green-500">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <Camera className="w-6 h-6" />
          <span>Photo</span>
        </label>
        
        <button
          onClick={recording ? stopRecording : startRecording}
          className={`flex items-center gap-2 ${recording ? 'text-red-500' : 'text-gray-600 hover:text-green-500'}`}
        >
          {recording ? <Square className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          <span>{recording ? 'Arrêter' : 'Audio'}</span>
        </button>
        
        <button
          onClick={handlePost}
          disabled={!postText.trim() && !tempImage}
          className="ml-auto bg-green-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          <span>Poster</span>
        </button>
      </div>
    </div>
  );
};

PostCreation.propTypes = {
  onPost: PropTypes.func.isRequired
};

export default PostCreation;
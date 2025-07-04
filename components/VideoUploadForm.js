import { useState } from 'react';

const VideoUploadForm = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');

  const handleVideoUpload = () => {
    // Implement video upload logic here
  };

  return (
    <form onSubmit={handleVideoUpload}>
      <input
        type="text"
        value={videoTitle}
        onChange={(e) => setVideoTitle(e.target.value)}
        placeholder="Video title"
        className="w-full p-2 mb-4 border border-gray-400 rounded"
      />
      <input
        type="text"
        value={videoDescription}
        onChange={(e) => setVideoDescription(e.target.value)}
        placeholder="Video description"
        className="w-full p-2 mb-4 border border-gray-400 rounded"
      />
      <input
        type="file"
        accept="video/mp4"
        onChange={(e) => setVideoUrl(e.target.files[0])}
        className="w-full p-2 mb-4 border border-gray-400 rounded"
      />
      <button type="submit" className="bg-gold text-white p-2 rounded">
        Upload video
      </button>
    </form>
  );
};

export default VideoUploadForm;
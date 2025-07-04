import Image from 'next/image';

const VideoCard = ({ video }) => {
  return (
    <div>
      <Image
        src={video.thumbnail}
        alt={video.title}
        width={200}
        height={150}
      />
      <p>{video.title}</p>
    </div>
  );
};

export default VideoCard;
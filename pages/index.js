import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');

  const handleVideoUpload = () => {
    // Implement video upload logic here
  };

  return (
    <div>
      <Head>
        <title>GoldTube</title>
        <meta name="description" content="A YouTube clone with luxury golden design" />
      </Head>

      <header className="bg-gold text-white p-4">
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Upload a video</h1>
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

        <div className="mt-4">
          <Image
            src="https://images.pexels.com/photos/1330645/pexels-photo-1330645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="A single purple doughnut with white stripes on a bright yellow backdrop, creating a striking color contrast."
            width={400}
            height={266}
          />
        </div>

        <div className="mt-4">
          <video
            src="https://videos.pexels.com/video-files/1943483/1943483-hd_1280_720_25fps.mp4"
            poster="https://images.pexels.com/videos/1943483/free-video-1943483.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
            controls
          />
        </div>
      </main>

      <footer className="bg-gold text-white p-4">
        <p>&copy; 2023 GoldTube</p>
      </footer>
    </div>
  );
}
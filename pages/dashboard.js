import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Implement video fetching logic here
  }, []);

  return (
    <div>
      <Head>
        <title>GoldTube Dashboard</title>
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
        <h1 className="text-3xl font-bold mb-4">Your videos</h1>
        <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={200}
                height={150}
              />
              <p>{video.title}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer className="bg-gold text-white p-4">
        <p>&copy; 2023 GoldTube</p>
      </footer>
    </div>
  );
}
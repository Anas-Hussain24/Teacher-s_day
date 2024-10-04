"use client"
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  const [showFullPage, setShowFullPage] = useState(false);

  return (
    <div>
      <Head>
        <title>Happy TeacherDay</title>
        <meta name="description" content="A special surprise page for my teacher" />
      </Head>

      {/* Initial Simple Page */}
      {!showFullPage ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-pink-200">
          <h1 className="text-5xl font-extrabold text-pink-600 mb-8 animate-fadeIn">Surprise!</h1>
          <button
            onClick={() => setShowFullPage(true)}
            className="bg-pink-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-pink-500 transition transform hover:scale-105">
            Click for a Surprise!
          </button>
        </div>
      ) : (
        // Full Page View After Click
        <div className="min-h-screen relative">
          {/* Background Video */}
          <video
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-6 py-12 bg-black bg-opacity-50">
            {/* Left-Aligned Section */}
            <div className="flex flex-row items-start justify-start w-full max-w-6xl">
              <div className="w-1/2 text-left pr-8">
                {/* Heading */}
                <h1 className="text-4xl font-bold mb-6 animate-fadeIn">🌸 Happy Teachers Day! 🌸</h1>

                {/* Tech-Themed Paragraph */}
                <p className="text-xl mb-6 animate-fadeInSlow">
                  In the world of technology, you are the architect of our minds, shaping our future with your wisdom and passion. Thank you for being our guiding star!
                </p>

                {/* Floral Image */}
                <div className="mb-6 flex ">
                  <Image src="/coding.png" alt="Coding" className="w-32 h-32 object-cover animate-bloom align-middle" width={192} height={192}/>
                  <Image src="/work.png" alt="Work" className="w-32 h-32 object-cover animate-bloom align-middle ml-7" width={192} height={192}/>
                </div>

                 {/* Creative Card Section */}
                 <div className="relative p-8 bg-white text-black rounded-lg shadow-2xl overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                  
                  {/* Decorative Animated Line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-pink-400 to-yellow-300 animate-fadeInSlow"></div>

                  {/* New Message */}
                  <p className="text-lg font-bold">
                    Your dedication has been like the light guiding us, helping us bloom and grow every day. Thank you for empowering us to become the best versions of ourselves.
                  </p>

                  {/* Subtle Glowing Effect */}
                  <div className="absolute inset-0 border-2 border-pink-400 rounded-lg animate-glow"></div>
                </div>
              </div>
            </div>
          </div>
          </div>
      )}
    </div>
  );
};

export default Home;

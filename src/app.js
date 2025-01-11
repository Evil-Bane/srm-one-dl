// Filename: App.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <header className="bg-black/60 backdrop-blur-sm sticky top-0 z-50 p-5 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          SRM One
        </h1>
        <p className="text-xl mt-2">Your Ultimate College Companion</p>
      </header>

      <main>
        {/* Introduction Section */}
        <section className="min-h-screen flex items-center justify-center p-5">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-8">Welcome to SRM One</h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience a revolutionary way to manage your college life with SRM One. 
              All your academic needs, social connections, and campus activities in one place.
            </p>
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Slider {...sliderSettings}>
                <div className="h-[600px]">
                  <img 
                    src="https://evil-bane.github.io/srm-one-dl/images/HomePage.png" 
                    alt="App Screenshot 1"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="h-[600px]">
                  <img 
                    src="https://evil-bane.github.io/srm-one-dl/images/StudentPortal.png" 
                    alt="App Screenshot 2"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="h-[600px]">
                  <img 
                    src="https://evil-bane.github.io/srm-one-dl/images/EventsPage.png" 
                    alt="App Screenshot 3"
                    className="object-cover w-full h-full"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-5">
          <h2 className="text-4xl font-bold text-center mb-20">Key Features</h2>
          
          {/* One Time Login */}
          <FeatureSection 
            title="One Time Login"
            description="Never worry about logging in repeatedly. Our secure one-time login system remembers your credentials while maintaining the highest security standards. Access all your college resources with just one tap!"
            image="https://evil-bane.github.io/srm-one-dl/images/StudentPortal.png"
            reversed={false}
          />

          {/* All-In-One Connectivity */}
          <FeatureSection 
            title="All-In-One Connectivity"
            description="Connect to every aspect of SRM IST through a single platform. Access academic resources, campus services, and administrative tools seamlessly. No more juggling between different portals!"
            image="https://evil-bane.github.io/srm-one-dl/images/HomePage.png"
            reversed={true}
          />

          {/* Grade Details */}
          <FeatureSection 
            title="Comprehensive Grade Management"
            description="Track your academic progress with our detailed grade monitoring system. View semester-wise performance, calculate CGPA, and analyze your academic trajectory with intuitive visualizations and progress tracking."
            image="https://evil-bane.github.io/srm-one-dl/images/StudentPortal.png"
            reversed={false}
          />

          {/* Attendance Details */}
          <FeatureSection 
            title="Smart Attendance Tracking"
            description="Stay on top of your attendance with our automated calculator. Get real-time updates on your attendance percentage, receive alerts when you're running low, and plan your classes better with predictive analytics."
            image="https://evil-bane.github.io/srm-one-dl/images/StudentPortal.png"
            reversed={true}
          />

          {/* Create Posts */}
          <FeatureSection 
            title="Community Engagement"
            description="Share your thoughts, achievements, and updates with the entire SRM community. Create engaging posts, interact with peers, and stay connected with what's happening around campus. Built-in moderation ensures a healthy discussion environment."
            image="https://evil-bane.github.io/srm-one-dl/images/HomePage.png"
            reversed={false}
          />

          {/* Event Management */}
          <FeatureSection 
            title="Event Hub"
            description="Never miss out on campus events again! Browse upcoming events, register for workshops, track technical symposiums, and cultural festivals. Direct connection with organizing clubs makes participation easier than ever."
            image="https://evil-bane.github.io/srm-one-dl/images/EventsPage.png"
            reversed={true}
          />
        </section>

        {/* Download Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black p-5">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Get Started Today</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join thousands of SRM students who are already experiencing a more connected and efficient college life with SRM One.
            </p>
            <a 
              href="#download"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold py-4 px-12 rounded-full hover:scale-105 transition duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Download Now
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-black text-center p-8">
        <p className="text-gray-400">© 2023 SRM One. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

function FeatureSection({ title, description, image, reversed }) {
  return (
    <div className={`max-w-6xl mx-auto mb-32 p-5 flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10`}>
      <div className="flex-1">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 hover:bg-gray-800/70 transition duration-300">
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="flex-1">
        <img 
          src={image} 
          alt={title}
          className="rounded-lg shadow-2xl hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  );
}

export default App;

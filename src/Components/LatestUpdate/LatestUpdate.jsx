import React, { useState, useRef } from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
// import Button from "../../CommonComponent/Btn/Button";
import updateVideo from "../../Assetes/Images/upadateVideo/updated2.mp4";
import posterImg from "../../Assetes/Images/upadateVideo/posterImg.jpg";
import "./LatestUpdate.css";

const LatestUpdate = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  // Handle play/pause toggling
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle when video is ended or paused
  const handleVideoEndOrPause = () => {
    setIsPlaying(false); // Set video as not playing
    if (videoRef.current) {
      videoRef.current.load(); // Reload video to display the poster again
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Text Content (30% width) */}
      <div className="flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left md:w-[30%] space-y-4">
        <div className="flex justify-center items-center border-b-4 border-customOrange tracking-[4px] font-semibold gap-4 text-xl text-customOrange animate-fadeInUp">
          <FaBookOpenReader />
          <h3>Latest Video</h3>
        </div>
        <h2 className="text-6xl font-bold animate-slideIn">
          Let's Check Our <span className="text-customOrange">Latest</span> Video
        </h2>
        <p className="text-contentColor animate-fadeIn text-[18px]">
          There are many variations of passages available but the majority have suffered alteration in some form by injected humour look even slightly believable.
        </p>
        {/* <Button onClick={openModal}>LEARN MORE</Button> */}
      </div>
  
      {/* Video Section (70% width) */}
      <div className="relative md:w-[70%] w-full h-64 md:h-auto">
        <video
          ref={videoRef}
          src={updateVideo}
          className="w-full h-full object-cover rounded-customRoundedBtn shadow-lg"
          onClick={openModal}
          poster={isPlaying ? "" : posterImg} // If playing, remove poster image
          onPause={handleVideoEndOrPause} // When the video is paused, show the poster again
          onEnded={handleVideoEndOrPause} // When the video ends, show the poster again
        />
        {/* Play Button */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="play-btn absolute inset-0 flex items-center text-white justify-center text-2xl bg-customOrange bg-opacity-90"
          >
            <FaPlay />
          </button>
        )}
      </div>
    </div>
  
    {/* Modal for Full-Screen Video */}
    {isModalOpen && (
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      >
        <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
          <div className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="relative">
              <video
                ref={videoRef}
                src={updateVideo}
                className="w-full h-full object-cover rounded-lg"
                controls
                autoPlay
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </section>
  
  );
};

export default LatestUpdate;


import "react-image-lightbox/style.css";  // Make sure all imports are at the top
import React, { useState, useEffect, Suspense, lazy } from "react";  // Import statements at the top
import { FaBookOpenReader } from "react-icons/fa6";
import {
  img21, img22, img23, img24, img25, img26, img27, img28,
  img29, img30, img31, img32, img33, img34,
} from "../../Assetes/Images/Gallery/Gallery";

// Lazy-load Lightbox (move this import statement to the top)
const Lightbox = lazy(() => import("react-image-lightbox"));

const Gallery = () => {
  const galleryImages = [img21, img22, img23, img24, img25, img26];
  const imageHeights = ["h-96", "h-56", "h-96", "h-56", "h-96", "h-56"];
  const allImages = [img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Auto-play functionality when modal is open
  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setInterval(() => {
        setPhotoIndex((prevIndex) => (prevIndex + 1) % allImages.length);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen]);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="container py-16" id="Gallery">
      <div className="text-center">
        <div className="flex justify-center items-center text-2xl gap-2 text-customGold">
          <h3 className="flex items-center justify-center text-2xl border-b-4 border-customGold gap-4 tracking-[4px] font-semibold">
            <FaBookOpenReader />
            Gallery
          </h3>
        </div>
        <h2 className="text-5xl font-bold my-4 text-customBlue">
          Our Photo <span className="text-customGold">Gallery</span>
        </h2>
        <div className="flex justify-center items-center">
          <p className="text-contentColor text-xl w-full md:max-w-[50%] ">
          Explore our <sapn className="text-customBlue font-bold">YASH CAMPUS</sapn> life through our photo gallery. See the moments that make <sapn className="text-customBlue font-bold">YASH CAMPUS</sapn> College a place of learning, growth, and community.
          </p>
        </div>

        {/* Gallery Images */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`w-full md:w-1/4 p-2 ${imageHeights[index % imageHeights.length]} ${index === 1 ? "mt-12 md:mt-[12%]" : ""}`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover shadow-lg rounded-customRoundedBtn hover:bg-customBlue hover:p-5 hover:opacity-100 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* React Image Lightbox - Lazy loaded */}
        {isOpen && (
          <Suspense fallback={<div>Loading...</div>}>
            <Lightbox
              mainSrc={allImages[photoIndex]}
              nextSrc={allImages[(photoIndex + 1) % allImages.length]}
              prevSrc={allImages[(photoIndex + allImages.length - 1) % allImages.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % allImages.length)}
              onMovePrevRequest={() => setPhotoIndex((photoIndex + allImages.length - 1) % allImages.length)}
            >
              {/* Thumbnails below the modal */}
              <div className="flex justify-center mt-4 gap-2">
                {allImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-20 object-cover cursor-pointer rounded ${index === photoIndex ? "border-4 border-customGold" : "opacity-70"}`}
                    onClick={() => setPhotoIndex(index)}
                  />
                ))}
              </div>
            </Lightbox>
          </Suspense>
        )}
      </div>
    </section>
  );
};

export default Gallery;

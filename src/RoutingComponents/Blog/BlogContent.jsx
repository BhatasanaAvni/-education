import React from "react";
import bg from "../../Assetes/Images/Testimonial/bg.jpg";

const BlogContent = () => {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center" // Set the height to a custom value like 400px
      style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center" }} // Ensures the image is centered
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <h1 className="relative flex justify-center flex-col items-center top-[50%] z-10 text-white text-4xl font-semibold ">
     BLOG SINGLE
     <p>  Home &gt;&gt; &nbsp;<span className="text-customOrange">Blog</span> </p>
      </h1>
     
    </section>
  );
};

export default BlogContent;
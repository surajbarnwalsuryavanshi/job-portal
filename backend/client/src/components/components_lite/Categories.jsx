// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../ui/carousel";
// import { Button } from "../ui/button";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setSearchedQuery } from "@/redux/jobSlice";

// const category = [
//   "Frontend Developer",
//   "Backend Developer",
//   "Full Stack Developer",
//   "Technical Support Executive",
//   "Data Scientist",
//   "DevOps Engineer",
//   "Mobile App Developer",
//   "UI/UX Designer",
//   "Project Manager",
//   "Quality Assurance Engineer",
//   "Cybersecurity Specialist",
//   "AI Engineer",
//   "Cloud Architect",
//   "Database Administrator",
//   "Network Engineer",
//   "Technical Support Specialist",
// ];

// const Categories = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const searchJobHandler = (query) => {
//     dispatch(setSearchedQuery(query));
//     navigate("/browse");
//   };

//   return (
//     <>
//       <div>
//         <h1 className="text-2xl font-bold text-center text-blue-600">
//           Categories
//         </h1>

//         <p className="text-center text-gray-800 text-lg font-mono font-bold">
//           Explore our extensive job market.
//           <span className="text-red-500"> "Get hired"</span>
//         </p>
//       </div>

//       <Carousel className="w-full max-w-4xl mx-auto my-10">
//         <CarouselContent>
//           {category.map((item, index) => {
//             return (
//               <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//                 <Button
//                   onClick={() => searchJobHandler(item)}
//                   className="w-full bg-[#073e63] hover:bg-[#021725] text-white rounded-xl"
//                 >
//                   {item}
//                 </Button>
//               </CarouselItem>
//             );
//           })}
//         </CarouselContent>

//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </>
//   );
// };

// export default Categories;

import React from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Mobile App Developer",
  "UI/UX Designer",
  "Project Manager",
  "Quality Assurance Engineer",
  "Cybersecurity Specialist",
  "AI Engineer",
  "Cloud Architect",
  "Database Administrator",
  "Network Engineer",
  "Technical Support Specialist",
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="w-full py-10 overflow-hidden bg-gradient-to-r from-slate-100 via-white to-slate-100">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-[#073e63]">Categories</h1>

        <p className="text-gray-700 text-lg font-semibold mt-2">
          Explore our extensive job market.
          <span className="text-red-500"> Get hired 🚀</span>
        </p>
      </div>

      {/* Marquee Section */}
      <div className="relative overflow-hidden">
        {/* Left Gradient Blur */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>

        {/* Right Gradient Blur */}
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>

        {/* Marquee */}
        <div className="flex gap-5 animate-marquee whitespace-nowrap w-max">
          {[...category, ...category].map((item, index) => (
            <Button
              key={index}
              onClick={() => searchJobHandler(item)}
              className="
                bg-[#073e63]
                hover:bg-[#021725]
                text-white
                rounded-2xl
                px-8
                py-6
                text-base
                font-semibold
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                hover:scale-110
                flex-shrink-0
                cursor-pointer
              "
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

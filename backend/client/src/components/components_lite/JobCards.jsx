import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const JobCards = ({ job }) => {
  const navigate = useNavigate();
  console.log(job); 
  return (
    <>
      <div
        onClick={() => {
          navigate(`/description/${job._id}`);
        }}
        className="p-5 rounded-md shadow-xl bg-white border border-gray-200 hover:scale-105 shadow-blue-100 hover:shadow-blue-200 transition-transform duration-300 cursor-pointer"
      >
        <div>
          <h1 className="text-lg font-medium">{job?.company?.name}</h1>
          <p className="text-sm text-blue-700 font-mono">India</p>
        </div>
        <div>
          <h2 className="font-bold text-lg my-2">{job?.title}</h2>
          <p className="text-sm text-gray-700 text-justify">
            {job?.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center mt-3">
          <Badge
            className="text-blue-600 font-bold cursor-pointer"
            variant="ghost"
          >
            {job?.position} Open Positions
          </Badge>
          <Badge
            className="text-[#fa4f09] font-bold cursor-pointer"
            variant="ghost"
          >
            {job?.salary}
          </Badge>
          <Badge
            className="text-[#6b3ac2] font-bold cursor-pointer"
            variant="ghost"
          >
            {job?.location}
          </Badge>
          <Badge
            className="text-black font-bold cursor-pointer"
            variant="ghost"
          >
            {job?.jobType}
          </Badge>
        </div>
      </div>
    </>
  );
};

export default JobCards;

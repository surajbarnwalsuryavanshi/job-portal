import React, { useState } from "react";
import { Button } from "../ui/button";
import { Bookmark, BookMarked } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import Logo from "../../assets/user_logo.png";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  // const jobId = "$ur@j";

  const [isBookmarked, setIsBookmarked] = useState(false);

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };
  console.log(job._id);
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200 hover:scale-105 shadow-blue-100 hover:shadow-blue-200 transition-transform duration-300">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>

        <Button
          variant="outline"
          className="rounded-full cursor-pointer"
          size="icon"
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          {isBookmarked ? <BookMarked /> : <Bookmark />}
        </Button>
      </div>

      {/* Company Section */}
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} className="object-contain" />
          </Avatar>
        </Button>

        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>

      {/* Job Details */}
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position} Open Positions
        </Badge>

        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.salary}
        </Badge>

        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          {job?.location}
        </Badge>

        <Badge className="text-black font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => {
            navigate(`/description/${job._id}`);
          }}
          className="cursor-pointer"
          variant="outline"
        >
          Details
        </Button>

        <Button className="bg-[#7209b7] hover:bg-[#5f0aa0] cursor-pointer">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;

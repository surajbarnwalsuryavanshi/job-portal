import React, { useState } from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import AppliedJob from "./AppliedJob";
import EditProfileModel from "./EditProfileModel";
import { useSelector } from "react-redux";
import useGetAllAppliedJobs from "@/hooks/useGetAllAppliedJobs";

const Profile = () => {
  useGetAllAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 shadow shadow-gray-400 hover:shadow-[#ed7603]">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <Avatar className="cursor-pointer h-24 w-24 border-2 border-black">
              <AvatarImage
                src={user?.profile?.profilePhoto}
                alt="Profile Picture"
              />
            </Avatar>

            <div>
              <h1 className="font-medium texl-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right cursor-pointer"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span className="">{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span className="">+91 {user?.phoneNumber}</span>
          </div>
        </div>

        <div>
          <div className="my-5">
            <h1 className="font-medium text-lg">Skills : </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 p-2">
              {user?.profile?.skills?.length > 0 ? (
                user.profile.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="flex items-center justify-center
                              px-3 py-2
                              text-center
                              whitespace-normal
                              break-words
                              min-h-[40px]
                              rounded-xl
                              bg-gradient-to-r from-red-500 to-orange-500
                              text-white
                              shadow-md
                              hover:scale-105
                              transition-all duration-200
                              cursor-pointer
                            "
                  >
                    {skill}
                  </Badge>
                ))
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-md font-bold">Resume : </label>
            <div>
              {user?.profile?.resume ? (
                <a
                  href={user?.profile?.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="cursor-pointer text-blue-700 border border-blue-950 hover:underline"
                  >
                    Download Resume
                  </Button>
                </a>
              ) : (
                <span className="text-red-600 font-medium">
                  "No Resume Found !"
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="text-lg my-5 font-bold">Applied Jobs</h1>
        {/* Application Table */}
        <AppliedJob />
      </div>

      {/* Edit Profile Model */}
      <EditProfileModel open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { FaGlobe } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <>
      <div className="text-center text-xl">
        <div className="flex flex-col gap-5 my-10 animate__animated animate__pulse">
          <span className="flex items-center gap-1 px-3 mx-auto p-2 rounded-full bg-gray-200 text-[#ea841d] font-medium">
            <FaGlobe className="text-orange-700 text-2xl" />
            <span>Welcome to</span>
            <span className="text-blue-900 font-extrabold">SAMANTA</span>-
            <span className="text-orange-400 font-extrabold">India</span>-
            <span className="text-[#0498f6]">Job Portal</span>
          </span>
          <h2 className="text-5xl font-bold animate__animated animate__flipInX">
            Search Apply &{" "}
          </h2>{" "}
          <h2 className="text-5xl font-bold animate__animated animate__flipInX">
            {" "}
            Get Your{" "}
            <span className="text-[#6a38c2] animate__animated animate__flipInX">
              Dream Jobs
            </span>
          </h2>
          <p className="font-mono text-sm">
            Start your hunt for the best, life-changing career opportunities
            from here in your <br /> selected areas conveniently and get hired
            quickly.
          </p>
          <div className="flex w-[40%] shadow-md border border-gray-200 bg-white pl-4 pr-2 py-1 rounded-full items-center gap-3 mx-auto my-4">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find Your Dream Job"
              className="outline-none border-none w-full text-sm"
            />
            <Button
              onClick={searchJobHandler}
              className="rounded-full bg-[#073e63] hover:bg-[#021725]/90 p-2 cursor-pointer"
            >
              <Search className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

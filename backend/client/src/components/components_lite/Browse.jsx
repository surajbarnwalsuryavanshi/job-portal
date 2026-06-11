import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setSearchedQuery(""));
  // }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Search Results{" "}
          <span className="text-base font-medium text-gray-700">
            ({allJobs.length} Jobs Found)
          </span>
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {allJobs.map((job) => {
            return <Job key={job._id} job={job} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Browse;

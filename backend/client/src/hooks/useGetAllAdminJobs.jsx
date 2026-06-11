import { setAllAdminJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all the jobs from the API
    const fetchAllAdminJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/getadminjobs`, {
          withCredentials: true,
        });
        // console.log("API Res For Jobs :", res.data);
        if (res.data.status) {
          // Updated success check
          dispatch(setAllAdminJobs(res.data.jobs));
        } else {
          setError("Failed to fetch jobs.");
        }
      } catch (error) {
        console.error(error);
        setError(error.message || "An error occurred while fetching jobs.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllAdminJobs();
  }, [dispatch]);
};

export default useGetAllAdminJobs;

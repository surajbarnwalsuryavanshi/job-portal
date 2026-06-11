import React, { useEffect } from "react";
import Navbar from "../Navbar";
import ApplicantsTable from "./ApplicantsTable";
import axios from "axios";
import { APPLICATION_API_ENDPOINT } from "@/utils/data";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllApplications } from "@/redux/applicationSlice";

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_ENDPOINT}/${params.id}/applicants`,
          {
            withCredentials: true,
          },
        );
        dispatch(setAllApplications(res.data.job));
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };
    fetchApplicants();
  }, [params.id]);

  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold my-10 flex items-center gap-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              👥 Total Applicants
            </span>

            <span className="px-4 py-1 text-sm font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-md">
              {applicants?.applications?.length}
            </span>
          </h1>
          <ApplicantsTable />
        </div>
      </div>
    </>
  );
};

export default Applicants;

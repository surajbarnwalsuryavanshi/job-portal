import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Categories from "./Categories";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";
import AuthPopup from "./AuthPopup";

const Home = () => {
  useGetAllJobs();
  // const { loading, error } = useGetAllJobs();
  // const jobs = useSelector((state) => state.jobs.allJobs);
  // console.log("Jobs in Component: ", loading, error, jobs);
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Recruiter Redirect
  useEffect(() => {
    if (user?.role === "Recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  // Reset Search
  useEffect(() => {
    dispatch(setSearchedQuery(""));
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      {/* {loading && <p>Loading Jobs...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <LatestJobs jobs={jobs} />} */}
      <LatestJobs />
      <Footer />
      <AuthPopup />
    </>
  );
};

export default Home;

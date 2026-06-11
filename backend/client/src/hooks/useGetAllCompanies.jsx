import { setAllCompanies } from "@/redux/companySlice";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCompanies = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${COMPANY_API_ENDPOINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllCompanies(res.data.companies));
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
    fetchAllCompanies();
  }, []);
};

export default useGetAllCompanies;

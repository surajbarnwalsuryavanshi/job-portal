import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById = (companyId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleCompany = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${COMPANY_API_ENDPOINT}/get/${companyId}`,
          {
            withCredentials: true,
          },
        );
        console.log("Company By Id", res.data.company);
        if (res.data.status || res.data.company) {
          dispatch(setSingleCompany(res.data.company));
        } else {
          setError("Failed to fetch company."); // jobs nahi, company likho yahan
        }
      } catch (error) {
        console.error(error);
        setError(error.message || "An error occurred while fetching jobs.");
      } finally {
        setLoading(false);
      }
    };
    fetchSingleCompany();
  }, [companyId, dispatch]);
};

export default useGetCompanyById;

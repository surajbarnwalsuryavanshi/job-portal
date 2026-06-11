import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Chennai",
      "Hyderabad",
      "Pune",
      "Kolkata",
      "Ahmedabad",
      "Remote",
    ],
  },
  {
    filterType: "Technology",
    array: [
      "Mern",
      "Frontend",
      "Backend",
      "React",
      "Java",
      "Node",
      "Python",
      "Devops",
    ],
  },
  {
    filterType: "Experience",
    array: ["0-1 years", "1-3 years", "3-5 years", "5+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-3 LPA", "3-6 LPA", "6-10 LPA", "10+ LPA"],
  },
];

const FilterJob = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <>
      <div className="w-full bg-white animate__animated animate__bounceInLeft">
        <h1 className="text-lg font-bold">Filter Jobs</h1>
        <hr className="mt-3" />
        <RadioGroup value={selectedValue} onValueChange={handleChange}>
          {filterData.map((data, index) => {
            return (
              <div key={index}>
                <h2 className="text-lg font-bold">{data.filterType}</h2>
                {data.array.map((item, indx) => {
                  const itemId = `Id${index}-${indx}`;
                  return (
                    <div
                      className="flex items-center space-x-2 my-2"
                      key={indx}
                    >
                      <RadioGroupItem value={item} id={itemId}></RadioGroupItem>
                      <label htmlFor={itemId}>{item}</label>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </RadioGroup>
      </div>
    </>
  );
};

export default FilterJob;

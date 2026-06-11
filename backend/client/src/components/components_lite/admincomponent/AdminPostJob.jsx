import React, { useState } from "react";
import Navbar from "../Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JOB_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import axios from "axios";

const AdminPostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    companyId: "",
    position: 0,
    requirements: "",
    experienceLevel: "",
    jobType: "",
  });

  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const [loading, setLoading] = useState(false);
  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value,
    );
    setInput({ ...input, companyId: selectedCompany._id });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    // console.log(input);
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_ENDPOINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      } else {
        toast.error(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(
          error.response.data.message ||
            "An error occurred while posting the job.",
        );
      } else {
        toast.error("An error occurred while posting the job.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center w-screen my-5">
          <form
            onSubmit={submitHandler}
            className="p-8 max-w-4xl border border-gray-500 shadow-sm hover:shadow-xl hover:shadow-blue-200 rounded-lg"
          >
            <h2 className="text-xl font-bold mb-4">Create Job</h2>
            <fieldset className="border border-gray-300 p-6 rounded-lg shadow-sm">
              <legend className="px-3 text-xl font-bold text-blue-600">
                Job Create by Admin
              </legend>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <Label>Title:</Label>
                  <Input
                    type="text"
                    name="title"
                    placeholder="Enter Job Title"
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-md hover:shadow-blue-400"
                    value={input.title}
                    onChange={changeEventHandler}
                  />
                </div>
                <div>
                  <Label>Description:</Label>
                  <Input
                    type="text"
                    name="description"
                    placeholder="Enter Job Description"
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-md hover:shadow-blue-400"
                    value={input.description}
                    onChange={changeEventHandler}
                  />
                </div>
                <div>
                  <Label>Location:</Label>
                  <Input
                    type="text"
                    name="location"
                    placeholder="Enter Job Location"
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-md hover:shadow-blue-400"
                    value={input.location}
                    onChange={changeEventHandler}
                  />
                </div>
                <div>
                  <Label>Salary:</Label>
                  <Input
                    type="text"
                    name="salary"
                    placeholder="Enter Job Salary"
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-md hover:shadow-blue-400"
                    value={input.salary}
                    onChange={changeEventHandler}
                  />
                </div>
                <div>
                  <Label>Position:</Label>
                  <Input
                    type="number"
                    name="position"
                    placeholder="Enter Number of Openings"
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-md hover:shadow-blue-400"
                    value={input.position}
                    onChange={changeEventHandler}
                  />
                </div>
                <div>
                  <Label>Requirements:</Label>
                  <Input
                    type="text"
                    name="requirements"
                    placeholder="Enter Job Requirements"
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-md hover:shadow-blue-400"
                    value={input.requirements}
                    onChange={changeEventHandler}
                  />
                </div>
                <div>
                  <Label>Experience:</Label>
                  <Input
                    type="text"
                    name="experienceLevel"
                    placeholder="Enter Required Experience"
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-md hover:shadow-blue-400"
                    value={input.experienceLevel}
                    onChange={changeEventHandler}
                  />
                </div>
                <div>
                  <Label>Job Type:</Label>
                  <Input
                    type="text"
                    name="jobType"
                    placeholder="Enter Job Type (e.g., Full-time, Part-time)"
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-md hover:shadow-blue-400"
                    value={input.jobType}
                    onChange={changeEventHandler}
                  />
                </div>

                <div>
                  {companies.length > 0 && (
                    <Select onValueChange={selectChangeHandler}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Company" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {companies.map((company) => (
                            <SelectItem
                              key={company._id}
                              value={company.name.toLowerCase()}
                            >
                              {company.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </div>
              <div className="text-center mt-5">
                {loading ? (
                  <Button className="px-4 py-4 text-sm text-white bg-gray-700 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 cursor-pointer w-full font-mono">
                    {" "}
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait{" "}
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="px-4 py-4 text-sm text-white bg-gray-700 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 cursor-pointer w-full font-mono"
                  >
                    Create Job
                  </Button>
                )}
                {companies.length === 0 && (
                  <p className="text-red-600 font-bold text-sm mt-2">
                    **! Please register a company to post jobs.**
                  </p>
                )}
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminPostJob;

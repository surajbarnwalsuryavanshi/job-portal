import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { JOB_API_ENDPOINT } from "@/utils/data";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

const AdminJobSetup = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    position: 0,
    requirements: "",
    experienceLevel: "",
    jobType: "",
  });

  // 🔥 fetch single job
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${id}`, {
          withCredentials: true,
        });

        if (res.data.success) {
          setInput({
            title: res.data.job.title || "",
            description: res.data.job.description || "",
            location: res.data.job.location || "",
            salary: res.data.job.salary || "",
            position: res.data.job.position || 0,
            requirements: res.data.job.requirements || "",
            experienceLevel: res.data.job.experienceLevel || "",
            jobType: res.data.job.jobType || "",
          });
        }
      } catch (error) {
        toast.error("Failed to load job");
        console.error(error);
      }
    };

    fetchJob();
  }, [id]);

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // 🔥 update job
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.put(`${JOB_API_ENDPOINT}/update/${id}`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      toast.error("Update failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto my-10">
        <form onSubmit={submitHandler}>
          <div className="flex items-center gap-5 mb-6">
            <Button
              onClick={() => navigate("/admin/jobs")}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <ArrowLeft />
              Back
            </Button>

            <h1 className="text-xl font-bold text-blue-600">Edit Job</h1>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Title</Label>
              <Input
                name="title"
                value={input.title}
                onChange={changeHandler}
              />
            </div>

            <div>
              <Label>Location</Label>
              <Input
                name="location"
                value={input.location}
                onChange={changeHandler}
              />
            </div>

            <div>
              <Label>Salary</Label>
              <Input
                name="salary"
                value={input.salary}
                onChange={changeHandler}
              />
            </div>

            <div>
              <Label>Position</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeHandler}
              />
            </div>

            <div>
              <Label>Experience</Label>
              <Input
                name="experienceLevel"
                value={input.experienceLevel}
                onChange={changeHandler}
              />
            </div>

            <div>
              <Label>Job Type</Label>
              <Input
                name="jobType"
                value={input.jobType}
                onChange={changeHandler}
              />
            </div>

            <div className="col-span-2">
              <Label>Description</Label>
              <Input
                name="description"
                value={input.description}
                onChange={changeHandler}
              />
            </div>

            <div className="col-span-2">
              <Label>Requirements</Label>
              <Input
                name="requirements"
                value={input.requirements}
                onChange={changeHandler}
              />
            </div>
          </div>

          {loading ? (
            <Button className="w-full mt-5">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Updating...
            </Button>
          ) : (
            <Button type="submit" className="w-full mt-5">
              Update Job
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminJobSetup;

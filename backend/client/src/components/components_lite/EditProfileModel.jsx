import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data";

const EditProfileModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "",
    // file: user?.profile?.resume,
    file: null,
  });

  // Input Change
  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // File Change
  const fileChangeHandler = (e) => {
    setInput({
      ...input,
      file: e.target.files[0],
    });
  };

  // Submit Form
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        },
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        setOpen(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[95%] sm:max-w-[600px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Edit Profile
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={submitHandler} className="space-y-4 mt-4">
          {/* Full Name */}
          <div className="grid sm:grid-cols-4 gap-2 items-center">
            <Label htmlFor="fullname">Name</Label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              className="sm:col-span-3 border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="grid sm:grid-cols-4 gap-2 items-center">
            <Label htmlFor="email">Email</Label>
            <input
              type="email"
              id="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="sm:col-span-3 border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="grid sm:grid-cols-4 gap-2 items-center">
            <Label htmlFor="phoneNumber">Phone</Label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              className="sm:col-span-3 border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Bio */}
          <div className="grid sm:grid-cols-4 gap-2 items-start">
            <Label htmlFor="bio">Bio</Label>
            <textarea
              id="bio"
              name="bio"
              rows="3"
              value={input.bio}
              onChange={changeEventHandler}
              className="sm:col-span-3 border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Skills */}
          <div className="grid sm:grid-cols-4 gap-2 items-center">
            <Label htmlFor="skills">Skills</Label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={input.skills}
              onChange={changeEventHandler}
              placeholder="HTML, CSS, React"
              className="sm:col-span-3 border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Resume */}
          <div className="grid sm:grid-cols-4 gap-2 items-center">
            <Label htmlFor="file">Resume</Label>
            <input
              type="file"
              id="file"
              accept=".pdf"
              onChange={fileChangeHandler}
              className="sm:col-span-3 border rounded-lg p-2 file:mr-3 file:px-3 file:py-1 file:border-0 file:bg-gray-200 file:rounded-md"
            />
          </div>

          {/* Button */}
          <DialogFooter className="pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-800 hover:bg-black text-white py-3 rounded-lg font-semibold"
            >
              {loading ? "Updating..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;

// import React, { useState } from "react";
// import Navbar from "../components_lite/Navbar";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { RadioGroup } from "../ui/radio-group";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { USER_API_ENDPOINT } from "@/utils/data";
// import { toast } from "sonner";

// const Register = () => {
//   const [input, setInput] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//     role: "",
//     phoneNumber: "",
//     file: "",
//   });

//   const navigate = useNavigate();

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const changeFileHandler = (e) => {
//     setInput({ ...input, file: e.target.files?.[0] });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     // console.log(input);

//     // Create a FormData object to send the data including the file
//     const formData = new FormData();
//     formData.append("fullname", input.fullname);
//     formData.append("email", input.email);
//     formData.append("password", input.password);
//     formData.append("role", input.role);
//     formData.append("phoneNumber", input.phoneNumber);
//     if (input.file) {
//       formData.append("file", input.file);
//     }

//     try {
//       const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         navigate("/login");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       const errorMessage = error.response
//         ? error.response.data.message
//         : "An error occurred during registration.";
//       toast.error(errorMessage);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex items-center justify-center max-w-7xl mx-auto">
//         <form
//           onSubmit={submitHandler}
//           className="w-1/2 border border-gray-500 rounded-md p-4 my-10"
//         >
//           <h1 className="font-bold text-xl mb-5 text-center text-shadow-gray-600 text-gray-700">
//             <span className="underline underline-offset-2">Register</span>
//           </h1>
//           <div className="my-4">
//             <Label className="mb-1">Full Name</Label>
//             <Input
//               type="text"
//               value={input.fullname}
//               name="fullname"
//               onChange={changeEventHandler}
//               placeholder="Full Name"
//             ></Input>
//           </div>
//           <div className="my-4">
//             <Label className="mb-1">Email</Label>
//             <Input
//               type="email"
//               value={input.email}
//               name="email"
//               onChange={changeEventHandler}
//               placeholder="Email"
//             ></Input>
//           </div>
//           <div className="my-4">
//             <Label className="mb-1">Password</Label>
//             <Input
//               type="password"
//               value={input.password}
//               name="password"
//               onChange={changeEventHandler}
//               placeholder="Password"
//             ></Input>
//           </div>
//           <div>
//             <Label className="mb-1">Phone Number</Label>
//             <Input
//               type="tel"
//               value={input.phoneNumber}
//               name="phoneNumber"
//               onChange={changeEventHandler}
//               placeholder="Mobile Number"
//             ></Input>
//           </div>
//           <div className="flex items-center justify-between gap-4">
//             <RadioGroup className="flex items-center gap-4 my-5">
//               <div className="flex items-center space-x-3">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="Student"
//                   checked={input.role === "Student"}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
//                   id="r1"
//                 />
//                 <Label htmlFor="r1">Student</Label>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="Recruiter"
//                   checked={input.role === "Recruiter"}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
//                   id="r2"
//                 />
//                 <Label htmlFor="r2">Recruiter</Label>
//               </div>
//             </RadioGroup>
//           </div>
//           <div className="flex items-center gap-4">
//             <Label>Profile Photo :</Label>
//             <Input
//               type="file"
//               accept="image/*"
//               onChange={changeFileHandler}
//               className="cursor-pointer w-1/3"
//             ></Input>
//           </div>
//           <button
//             type="submit"
//             className="block w-3/4 mx-auto py-3 my-3 text-white bg-primary hover:bg-primary/90 rounded-md"
//           >
//             Register
//           </button>
//           {/* already account then login */}
//           <p className="text-sm text-gray-500 mt-5 text-center">
//             Already have an account?
//             <Link
//               to="/login"
//               className="ml-2 text-blue-600 font-semibold relative group"
//             >
//               Log in
//               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
//             </Link>
//           </p>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Register;

import React, { useEffect, useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    adharcard: "",
    pancard: "",
    file: null,
  });

  // const [loading, setLoading] = useState(false);

  // Handle text input
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle file input
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files[0] });
  };

  // Submit form
  const submitHandler = async (e) => {
    e.preventDefault();
    // setLoading(true);

    try {
      dispatch(setLoading(true));
      const formData = new FormData();

      Object.keys(input).forEach((key) => {
        if (input[key]) {
          formData.append(key, input[key]);
        }
      });

      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      const message = error.response?.data?.message || "Registration failed";
      toast.error(message);
    } finally {
      // setLoading(false);
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-300 shadow-md rounded-lg p-6 my-10 bg-white"
        >
          <h1 className="text-2xl font-bold text-center text-shadow-gray-600 text-gray-700 mb-6">
            <span className="underline underline-offset-4">Register</span>
          </h1>

          {/* Full Name */}
          <div className="mb-4">
            <Label>Full Name</Label>
            <Input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Enter password"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <Label>Phone Number</Label>
            <Input
              type="tel"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="Enter phone number"
            />
          </div>

          {/* Aadhar */}
          <div className="mb-4">
            <Label>Aadhar Number</Label>
            <Input
              type="text"
              name="adharcard"
              value={input.adharcard}
              onChange={changeEventHandler}
              placeholder="Enter Aadhar"
            />
          </div>

          {/* PAN */}
          <div className="mb-4">
            <Label>PAN Number</Label>
            <Input
              type="text"
              name="pancard"
              value={input.pancard}
              onChange={changeEventHandler}
              placeholder="Enter PAN"
            />
          </div>

          {/* Role */}
          <div className="mb-4">
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                />
                Student
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                />
                Recruiter
              </label>
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-4">
            <Label>Profile Photo</Label>
            <Input type="file" accept="image/*" onChange={changeFileHandler} />
          </div>

          {/* Submit */}

          {loading ? (
            <div className="flex items-center justify-center my-10">
              <div className="spinner-border text-gray-800" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              // disabled={loading}
              className="w-full py-3 mt-4 bg-gray-800 hover:bg-gray-900 text-white rounded-md font-semibold disabled:opacity-50 cursor-pointer"
            >
              Register
              {/* {loading ? "Registering..." : "Register"} */}
            </button>
          )}

          {/* Login link */}
          <p className="text-sm text-gray-500 mt-5 text-center">
            Already have an account?
            <Link
              to="/login"
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;

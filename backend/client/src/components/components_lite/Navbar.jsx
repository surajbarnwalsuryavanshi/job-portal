import React from "react";
import logo from "../../assets/samanta_logo.png";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { setUser } from "@/redux/authSlice";
const Navbar = () => {
  // let user = false;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);

  const logoutHander = async () => {
    try {
      const response = await axios.post(
        `${USER_API_ENDPOINT}/logout`,
        {},
        {
          withCredentials: true,
        },
      );
      if (response.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success("Logged out successfully");
      } else {
        toast.error("Failed to log out");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="bg-white m-4 animate__animated animate__bounceInDown">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
          <div className="left">
            <img src={logo} alt="samanta logo" width={200} />
          </div>
          <div className="right flex items-center gap-8">
            <ul className="flex font-bold items-center gap-6 ">
              {user && user.role === "Recruiter" ? (
                <>
                  <li className="cursor-pointer">
                    <Link to="/admin/companies">Companies</Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link to="/admin/jobs">Jobs</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="cursor-pointer">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link to="/browse">Browse</Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link to="/jobs">Jobs</Link>
                  </li>
                </>
              )}
            </ul>
            {!user ? (
              <div className="flex item-center gap-2">
                <Link to="/login">
                  {" "}
                  <Button variant="outline" className="px-5 cursor-pointer">
                    Login
                  </Button>
                </Link>

                <Link to="/register">
                  {" "}
                  <Button className="bg-red-400 hover:bg-red-700 cursor-pointer">
                    Register
                  </Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer border border-black">
                    <AvatarImage src={user?.profile?.profilePhoto} />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-4">
                  <div className="flex items-center gap-4 space-y-2">
                    <Avatar className="cursor-pointer border border-black">
                      <AvatarImage src={user?.profile?.profilePhoto} />
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">{user?.fullname}</h3>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col text-shadow-gray-600">
                    {user && user.role === "Student" && (
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User2></User2>
                        <Button variant="link" className="cursor-pointer">
                          <Link to="/profile">Profile</Link>
                        </Button>
                      </div>
                    )}

                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut></LogOut>
                      <Button
                        onClick={logoutHander}
                        variant="link"
                        className="cursor-pointer"
                      >
                        Log Out
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

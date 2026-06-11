import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { APPLICATION_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { Download, MoreHorizontal } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  const statusHandler = async (status, id) => {
    console.log("Called");
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLICATION_API_ENDPOINT}/status/${id}/update`,
        { status },
      );
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div>
        <Table>
          <TableCaption>List of your recent applied Users</TableCaption>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Applied On</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
          <TableBody>
            {applicants &&
              applicants?.applications?.map((item) => {
                return (
                  <TableRow key={item._id}>
                    <TableCell>{item?.applicant?.fullname}</TableCell>
                    <TableCell>{item?.applicant?.email}</TableCell>
                    <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                    <TableCell>
                      {item?.applicant?.profile?.resume ? (
                        <a
                          className="text-blue-600 cursor-pointer"
                          href={item?.applicant?.profile?.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download />
                        </a>
                      ) : (
                        <span>NA</span>
                      )}
                    </TableCell>

                    <TableCell>
                      {item?.createdAt ? item.createdAt.split("T")[0] : "NA"}
                    </TableCell>
                    <TableCell className="float-right cursor-pointer text-right">
                      <Popover>
                        <PopoverTrigger>
                          <MoreHorizontal />
                        </PopoverTrigger>
                        <PopoverContent className="w-32">
                          <div className="flex flex-col gap-2">
                            {shortlistingStatus.map((status, index) => {
                              return (
                                <label
                                  key={index}
                                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                                >
                                  <input
                                    type="radio"
                                    name={`status-${item?._id}`}
                                    value={status}
                                    onChange={() =>
                                      statusHandler(status, item?._id)
                                    }
                                    className="cursor-pointer"
                                  />
                                  <span>{status}</span>
                                </label>
                              );
                            })}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ApplicantsTable;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseURL } from "../../../utils/constant";

const UserDetails = () => {
  const [firstName, setFirstName] = useState("Guest");
  const [lastName, setLastName] = useState("User");
  const [age, setAge] = useState(0);
  const [mobile, setMobile] = useState("");
  const [monthlyPlan, setMonthlyPlan] = useState("");
  const [planActivateDate, setPlanActivateDate] = useState("");
  const [planExpirationDate, setPlanExpirationDate] = useState("");
  const [membershipStatus, setMembershipStatus] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");

    axios
      .post(`${baseURL}/api/getUserDetails`, { email: userEmail })
      .then((response) => {
        if (response.status === 200) {
          setFirstName(response.data.user.firstName);
          setLastName(response.data.user.lastName);
        } else {
          setFirstName("Guest");
        }
      })
      .catch((err) => {
        console.error("Error fetching user details:", err);
      });


    axios
      .post(`${baseURL}/api/getMemberDetails`, { email: userEmail })
      .then((response) => {
        if (response.status === 200) {
          const { age, phone, membership, planActivateDate } =
            response.data.member;

          setAge(age);
          setMobile(phone);
          setMonthlyPlan(membership);
          setPlanActivateDate(planActivateDate);

          const activationDate = new Date(planActivateDate);
          let expirationDate;

          if (membership === "1-month") {
            expirationDate = new Date(
              activationDate.setMonth(activationDate.getMonth() + 1)
            );
          } else if (membership === "3-months") {
            expirationDate = new Date(
              activationDate.setMonth(activationDate.getMonth() + 3)
            );
          } else if (membership === "6-months") {
            expirationDate = new Date(
              activationDate.setMonth(activationDate.getMonth() + 6)
            );
          } else if (membership === "annual") {
            expirationDate = new Date(
              activationDate.setFullYear(activationDate.getFullYear() + 1)
            );
          }

          setPlanExpirationDate(expirationDate.toISOString().split("T")[0]);

          const currentDate = new Date();
          if (expirationDate > currentDate) {
            setMembershipStatus("Active");
          } else {
            setMembershipStatus("Expired");
          }
        } else {
          setAge("N/A");
          setMobile("N/A");
          setMonthlyPlan("N/A");
          setPlanActivateDate("N/A");
        }
      })
      .catch((err) => {
        console.error("Error fetching membership details:", err);
      });
  }, []);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        User Details
      </h1>
      <div className="space-y-4">
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Full Name:</span>{" "}
            {firstName + " " + lastName || "N/A"}
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Age:</span> {age || "N/A"}
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Mobile Number:</span>{" "}
            {mobile || "N/A"}
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Monthly Plan:</span>{" "}
            {monthlyPlan || "N/A"}
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Plan Activate Date:</span>{" "}
            {planActivateDate || "N/A"}
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            <span className="font-semibold">Plan Expiration Date:</span>{" "}
            {planExpirationDate || "N/A"}
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-700">
            <span className="font-semibold">Membership Status:</span>{" "}
            {membershipStatus || "N/A"}
          </p>
          <div
            className={`w-3 h-3 ml-2 rounded-full ${
              membershipStatus === "Active" ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

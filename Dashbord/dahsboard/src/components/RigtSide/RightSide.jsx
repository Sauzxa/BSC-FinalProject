import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import profile from "../../imgs/profile.png"; // Correct import for img1
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="user">
        <img src={profile} alt="User" />
      <p>SuperAdmin</p>
      </div>
      <div>
        <h3>Feedbacks</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;

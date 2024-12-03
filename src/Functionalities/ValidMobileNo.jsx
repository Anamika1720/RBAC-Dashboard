import React, { useState } from "react";

const ValidMobileNumberInput = ({ value, onChange }) => {
  const [error, setError] = useState("");

  const validateMobileNumber = (number) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(number);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
    if (validateMobileNumber(value)) {
      setError("");
    } else {
      setError("Please enter a valid 10-digit mobile number.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Mobile No"
        value={value}
        onChange={handleChange}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default ValidMobileNumberInput;

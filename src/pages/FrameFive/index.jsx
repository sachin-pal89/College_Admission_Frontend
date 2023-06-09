import React from "react";
import { Text } from "components";
import { useNavigate } from "react-router-dom";

const FrameFivePage = ({data, onChange}) => {

  const navigate = useNavigate();

  const handleCasteSelect = (event) => {
    const newData = {...data, 'Seat Type': event.target.value}
    console.log(newData)
    onChange(newData)
    navigate('/frametwelve')
  };

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[62px] items-center justify-start mx-auto p-[343px] md:px-10 sm:px-5 w-full">
        <Text className="font-medium text-gray_900 text-left w-auto" as="h2" variant="h2">
          What caste do you belong to?
        </Text>
        <select
          className="bg-bluegray_500 flex flex-row items-center justify-center mb-[129px] p-[25px] md:px-5 rounded-[50px] shadow-bs1 w-[35%] md:w-full"
          value={data}
          onChange={handleCasteSelect}
        >
          <option value="">Select Caste</option>
          <option value="OPEN">OPEN</option>
          <option value="EWS">EWS</option>
          <option value="OPEN (PwD)">OPEN (PwD)</option>
          <option value="OBC-NCL (PwD)">OBC-NCL (PwD)</option>
          <option value="OBC-NCL">OBC-NCL</option>
          <option value="ST (PwD)">ST (PwD)</option>ST (PwD)
          <option value="SC">SC</option>
          <option value="EWS (PwD)">EWS (PwD)</option>
          <option value="ST">ST</option>
          <option value="SC (PwD)">SC (PwD)</option>
        </select>
      </div>
    </>
  );
};

export default FrameFivePage;
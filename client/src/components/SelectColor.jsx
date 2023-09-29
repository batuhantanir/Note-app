import React from "react";

const SelectColor = ({setBgColor}) => {
  return (
    <select className="flex text-white bg-black cursor-pointer px-2" requerid="true" onChange={(e)=>{setBgColor(e.target.value)}}>
      <option
        className="  bg-[#ff0000] rounded-full h-7 w-7 cursor-pointer mx-0.5"
        value="red"
      >
        RED
      </option>
      <option
        className="bg-[#00ff00] rounded-full h-7 w-7 cursor-pointer mx-0.5"
        value="green"
      >
        GREEN
      </option>
      <option
        className="bg-[#0000ff] rounded-full h-7 w-7 cursor-pointer mx-0.5"
        value="blue"
      >
        Blue
      </option>
      <option
        className="bg-[#ffff00] rounded-full h-7 w-7 cursor-pointer mx-0.5"
        value="yellow"
      >
        YELLOW
      </option>
      <option
        className="bg-[#ff00ff] rounded-full h-7 w-7 cursor-pointer mx-0.5"
        value="pink"
      >
        PİNK
      </option>
    </select>
  );
};

export default SelectColor;

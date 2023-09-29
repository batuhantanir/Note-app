import React, { useState } from "react";
import SelectColor from "./SelectColor";

const AddNoteFooter = ({ setBgColor }) => {
  return (
    <div className="flex justify-between my-4 mx-8">
      <SelectColor setBgColor={setBgColor} />
      <button
        type="submit"
        className="bg-[#44C767] px-8 py-1 rounded-full text-white font-semibold hover:scale-110 active:scale-90"
      >
        ADD
      </button>
    </div>
  );
};

export default AddNoteFooter;

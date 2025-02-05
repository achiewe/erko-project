import React from "react";
import Header from "../components/Header/Header";
import NavigationPages from "../components/Navigation/NavigationPages";
import JobsMainContainer from "../components/JobsContainer/JobsMainContainer";

export default function page() {
  return (
    <div className="bg-[#EEEEEE]">
      <Header />
      <div className="flex px-[5px] w-full h-full items-start pb-[10px] flex-col">
        <NavigationPages />
        <JobsMainContainer />
      </div>
    </div>
  );
}

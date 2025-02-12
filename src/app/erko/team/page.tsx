import Header from "@/app/components/Header/Header";
import NavigationPages from "@/app/components/Navigation/NavigationPages";
import MainTeamContainer from "@/app/components/TeamContainer/MainTeamContainer";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full bg-[#EEEEEE]">
      <Header />
      <div className="flex px-[5px] w-full h-screen items-start flex-col pb-[10px]">
        <NavigationPages />
        <MainTeamContainer />
      </div>
    </div>
  );
}

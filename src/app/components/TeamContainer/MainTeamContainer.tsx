import React from "react";
import TeamCardErko from "./TeamCardErko";
import LukaPxl from "../../../../public/assets/luka pixel .png";
import TemikoPxl from "../../../../public/assets/Temiko pixel .png";
import AchiPxl from "../../../../public/assets/Achi pixelman .png";
import VaxanaPxl from "../../../../public/assets/pixelan vaxana .png";
import DachiPxl from "../../../../public/assets/dachi pixelman .png";
import SandroPxl from "../../../../public/assets/Sandro pixelman .png";
import NikaPxl from "../../../../public/assets/nika pixeled.png";
export default function MainTeamContainer() {
  return (
    <div
      className="flex mt-[1px] flex-row items-start justify-center w-full h-full sm:justify-center 
  gap-y-[0px] flex-wrap gap-x-[30px] bg-[#FFFFF0] border-r-2 border-b-2 border-gray-800 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] py-[20px] relative"
    >
      <TeamCardErko title="Luka" imageSrc={LukaPxl} link="/erko/team/1" />
      <TeamCardErko title="Temiko" imageSrc={TemikoPxl} link="/erko/team/2" />
      <TeamCardErko title="Achi" imageSrc={AchiPxl} link="/erko/team/3" />
      <TeamCardErko title="Luka" imageSrc={VaxanaPxl} link="/erko/team/4" />
      <TeamCardErko title="Dachi" imageSrc={DachiPxl} link="/erko/team/5" />
      <TeamCardErko title="Sandro" imageSrc={SandroPxl} link="/erko/team/6" />
      <TeamCardErko title="Nika" imageSrc={NikaPxl} link="/erko/team/7" />
    </div>
  );
}

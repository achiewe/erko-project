"use client";
import React from "react";
import OptionCardErko from "./OptionCardErko";
import teamPng from "../../../../public/Team.png";
import socialsPng from "../../../../public/socials.png";
import startupPng from "../../../../public/startup.png";
import freeMusicPng from "../../../../public/freeMusic.png";
import regionalPng from "../../../../public/regional.png";
import documentsPng from "../../../../public/documents.png";
import archivePng from "../../../../public/archive.png";

export default function MainErkoContainer() {
  return (
    <div
      className="flex mt-[1px] flex-row items-center justify-center w-full h-full h-sm:gap-[15px] h-sm:h-[570px] h-mm:h-[450px] h-mn:h-[300px] gap-y-[10px] flex-wrap gap-x-[50px] bg-[#FFFFF0] 
    border-r-2 border-b-2 border-gray-800 drop-shadow-[4px_3px_3px_rgba(0,0,0,0.40)] py-[20px] relative"
    >
      <OptionCardErko title="Teams" imageSrc={teamPng} link="/erko/team" />
      <OptionCardErko
        title="Socials"
        imageSrc={socialsPng}
        link="/erko/socials"
      />
      <OptionCardErko
        title="Startup Consulting"
        imageSrc={startupPng}
        link="/erko/consulting"
      />
      <OptionCardErko
        title="Free Music"
        imageSrc={freeMusicPng}
        link="/erko/music"
      />
      <OptionCardErko
        title="Regional Properties"
        imageSrc={regionalPng}
        link="/erko/regional"
      />
      <OptionCardErko
        title="Documents"
        imageSrc={documentsPng}
        link="/erko/documents"
      />
      <OptionCardErko
        title="Archive"
        imageSrc={archivePng}
        link="erko/archive"
      />
    </div>
  );
}

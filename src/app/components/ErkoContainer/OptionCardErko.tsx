"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface OptionCardProps {
  title: string;
  imageSrc: StaticImageData;
  link: string;
}

export default function OptionCardErko({
  title,
  imageSrc,
  link,
}: OptionCardProps) {
  return (
    <div className="w-[150px] flex items-center flex-col justify-center">
      <Link href={link}>
        <Image
          src={imageSrc}
          alt={title}
          className="h-[150px] w-[170px] h-sm:h-[120px] h-sm:w-[140px] h-mm:h-[100px] h-mm:w-[120px]"
        />
        <h3 className="text-center text-[20px]">{title}</h3>
      </Link>
    </div>
  );
}

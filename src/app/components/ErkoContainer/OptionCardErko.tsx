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
    <div className="w-[120px] flex items-center flex-col justify-center">
      <Link href={link}>
        <Image
          src={imageSrc}
          alt={title}
          className="h-[110px] h-sm:h-[90px] h-sm:w-[100px] h-mm:h-[80px] h-mm:w-[90px]"
        />
        <h3 className="text-center text-[18px]">{title}</h3>
      </Link>
    </div>
  );
}

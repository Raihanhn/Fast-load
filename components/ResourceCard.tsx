import React from "react";
import img1 from "/public/downloads.svg";
import arrow from "/public/arrow-blue.svg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
  downloadLink: string;
}

const ResourceCard = ({
  id,
  title,
  image,
  downloadNumber,
  downloadLink,
}: Props) => {
  return (
    <Card className=" w-full max-w-fit border-0 !bg-transparent sm:mx-w-[356px]  ">
      <Link href={downloadLink} target="_blank">
        <CardHeader className=" flex justify-center flex-col gap-2.5 !p-0 ">
          <div className="">
            <Image
              src={image}
              className=" h-full rounded-md object-cover"
              width={384}
              height={440}
              alt="title"
            />
          </div>
          <CardTitle className=" text-white font-semibold line-clamp-1 w-full text-left ">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>

      <CardContent className=" flex justify-between mt-4 p-0 ">
        <div className=" flex justify-center font-medium gap-1.5 text-white ">
          <Image src={img1} width={20} height={20} alt="download" />
          {downloadNumber}
        </div>
        <Link
          href={downloadLink}
          target="_blank"
          className=" bg-gradient-to-r from-[#FCD34D] via-[#0284C7] to-[#E11D48] inline-block text-transparent bg-clip-text font-bold  "
        >
          Download Now <Image src={arrow} width={13} height={10} alt="arrow" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;

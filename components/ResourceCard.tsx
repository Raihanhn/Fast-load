import React from "react";

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
  slug: string;
}

export default function ResourceCard({
  id,
  title,
  image,
  downloadNumber,
  slug,
}: Props) {
  return <div>ResourceCard</div>;
}

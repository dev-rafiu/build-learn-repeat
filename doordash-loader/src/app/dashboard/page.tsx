"use client";

import React from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Skeleton from "@/components/Skeleton";
import { fetchPageData } from "../fetch-data";

interface ContentProps {
  selectedPage: string;
}

export default function Content({ selectedPage }: ContentProps) {
  const { data, isPending } = useQuery({
    queryKey: ["pageData", selectedPage],
    queryFn: () => fetchPageData(selectedPage),
  });

  if (isPending) {
    console.log("pending");
  }

  return (
    <main className="content bg-gray-300 p-4 text-gray-800 max-h-52 relative">
      <div className="content-wrapper w-full h-full ">
        {data?.content || "No data available"}
        {isPending && <Skeleton />}
      </div>
    </main>
  );
}

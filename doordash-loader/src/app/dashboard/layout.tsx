"use client";

import React, { useState } from "react";
import { Sidebar } from "./sidebar";
import Content from "./page";

const Dashboard: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState("Home");

  return (
    <div className="dashboard grid grid-cols-[1fr,_2fr] gap-4">
      <Sidebar selectedPage={selectedPage} onPageSelect={setSelectedPage} />
      <Content selectedPage={selectedPage} />
    </div>
  );
};

export default Dashboard;

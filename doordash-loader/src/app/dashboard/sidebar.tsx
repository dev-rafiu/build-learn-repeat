import React from "react";

interface SidebarProps {
  selectedPage: string;
  onPageSelect: (page: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  selectedPage,
  onPageSelect,
}) => {
  const pages = ["Home", "Orders", "Settings"];

  return (
    <aside className="sidebar bg-gray-300 text-gray-700 flex flex-col gap-4 items-start p-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => {
            onPageSelect(page);
          }}
          className={`sidebar-link ${selectedPage === page ? "active" : ""}`}
        >
          {page}
        </button>
      ))}
    </aside>
  );
};

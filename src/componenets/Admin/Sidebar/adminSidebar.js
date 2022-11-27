import React from "react";
import "./sidebar.css";
import { sidebardata } from "./sidebardata";
export default function AdminSidebar() {
  return (
    <div className="sidebar">
      <ul>
        {sidebardata.map((data, i) => (
          <li></li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import "./Sidebar.scss";
import logo from "../../img/logo.svg";
import Menu from "./Menu";
import Playlist from "./Playlist";
import DownloadApp from "./DownloadApp";
import { useSelector } from "react-redux";
import SidebarCover from "./SidebarCover";

const Sidebar = () => {
  const sidebar = useSelector((state) => state.player.sidebar);
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Menu />
      <Playlist />
      <DownloadApp />

      {sidebar && <SidebarCover />}
    </aside>
  );
};

export default Sidebar;

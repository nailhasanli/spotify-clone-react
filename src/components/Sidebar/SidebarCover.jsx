import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../../stores/player";
import Icon from "../../Icons";

const SidebarCover = () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.player.current);
  return (
    <div className="sidebar-cover">
      <img src={current.cover} alt="" />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="left-cover-btn"
      >
        <Icon name="arrowup" size={16} />
      </button>
    </div>
  );
};

export default SidebarCover;

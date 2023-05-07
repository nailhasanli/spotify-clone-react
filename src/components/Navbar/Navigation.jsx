import React from "react";
import Icon from "../../Icons";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="navigation">
      <button onClick={() => navigate(-1)}>
        <Icon size={16} name="prev" />
      </button>
      <button onClick={() => navigate(1)}>
        <Icon size={16} name="forward" />
      </button>
    </nav>
  );
};

export default Navigation;

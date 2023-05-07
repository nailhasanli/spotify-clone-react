import React from "react";
import { Menu } from "@headlessui/react";
import Icon from "../../Icons";

const profile = [
  {
    name: "Account",
    icon: "link",
  },
  {
    name: "Profile",
  },
  {
    name: "Support",
    icon: "link",
  },
  {
    name: "Download",
    icon: "link",
  },
  {
    name: "Settings",
  },
  {
    name: "Logout",
  },
];

const User = () => {
  const user = {
    name: "Nail Hasanli",
    img: "https://sportsmatik.com/uploads/world-events/players/lionel-messi_1564492648.jpg",
  };
  return (
    <>
      <Menu as="nav" className="profile">
        {({ open }) => (
          <>
            <Menu.Button
              className={"profile-btn " + (open ? "btn-active" : "")}
            >
              <img src={user.img} alt="" />
              <span>{user.name}</span>
              <span className={open ? "rotate-icon" : "arrow-icon"}>
                <Icon name="arrow" size={16} />
              </span>
            </Menu.Button>
            <Menu.Items className="profile-item">
              <Menu.Item>
                {({ active }) => (
                  <ul>
                    {profile.map((item) => {
                      return (
                      <li>
                        <a
                          className={`menu-item ${active && "item-active"}`}
                          href="#"
                        >
                          {item.name}
                          <span>
                            {
                                item.icon && (
                                    <Icon name={item.icon} size={16}/>
                                )
                            }
                          
                          </span>
                        </a>
                      </li>
                    )})}
                  
                  </ul>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </>
  );
};

export default User;

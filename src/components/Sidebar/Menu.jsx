import React from "react";
import Icon from "../../Icons";
import SidebarLink from "./SidebarLink";
import SidebarCollection from "./SidebarCollection";


const links = [
    {
        title : "Home",
        name : "home",
        nameNotActive : "home2",
        to : "/"
    },
    {
        title : "Search",
        name : "search2",
        nameNotActive : "search",
        to : "/search"
    },
    {
        title : "Library",
        name : "library2",
        nameNotActive : "library",
        to : "/library"
    },
]

const collection = [
    {
        title: 'Create Playlist',
        name: 'create',
        to: '/collection',
        spanClass : 'coll'
    },
    {
        title: 'Liked Songs',
        name: 'liked',
        to: '/liked',
        spanClass : 'liked'
    },

]


const Menu = () => {
    
  return (
    <>
      <nav className="sidebar-menu">
        <ul>
            {links.map((link) => {
                return <SidebarLink {...link} />
            })}
        
        </ul>
      </nav>
      <nav className="sidebar-collection">
        <ul>
            {collection.map((coll) => {
                return <SidebarCollection {...coll}/>
            })}
        </ul>
      </nav>
    </>
  );
};

export default Menu;

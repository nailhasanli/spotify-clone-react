import React from "react";
import SongItem from "./SongItem";
import Title from "./Title";
const BoxContent = ({ title, to, children }) => {
  return (
    <section className="box-content">
      <Title title={title} to={to} />
      <div className="box-items">
        {children.map((item) => {
          return <SongItem item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default BoxContent;

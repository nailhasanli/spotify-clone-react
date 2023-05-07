import React from "react";

const SearchCategory = ({ category }) => {
  return (
    <div
      className='category-item'
      style={{ background: category.background }}
    >
      <div className="category-details">
        <h3 className="item-title">{category.title}</h3>
        <img src={category.cover} alt="" />
      </div>
    </div>
  );
};



export default SearchCategory;

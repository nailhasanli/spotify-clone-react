import React from 'react'


const FavCategory = ({ favorite }) => {
    return (
      <div
        className='category-item'
        style={{ background: favorite.background }}
      >
        <div className="category-details">
          <h3 className="item-title">{favorite.title}</h3>
          <img src={favorite.cover} alt="" />
        </div>
      </div>
    );
  };

export default FavCategory
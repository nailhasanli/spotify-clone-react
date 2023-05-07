import React, { useEffect, useRef, useState } from "react";
import "./Search.scss";
import categories from "../../data/categories";
import SearchCategory from "./SearchCategory";
import FavCategory from "./FavCategory";
import Title from "../../components/Content/Title";
import faveriteCategories from "../../data/faverite-categories";
import ScrollContainer from "react-indiana-drag-scroll";
import Icon from "../../Icons";

const Search = () => {
  const favoritesRef = useRef();

  useEffect(() => {
    if (favoritesRef.current) {
      favoritesRef.current.addEventListener("scroll", () => {
        const isEnd =
          favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth ===
          favoritesRef.current.scollWidth;
        const isStart = favoritesRef.current.scrollLeft === 0;
      });
    }
  }, [favoritesRef]);

  const sliderNext = () => {
    favoritesRef.current.scrollLeft += 250;
  };
  const sliderPrev = () => {
    favoritesRef.current.scrollLeft -= 250;
  };
  return (
    <>
      <div className="search">
        <section className="most-listened">
          <Title title="Most Listened" />
          <div className="slider-item">
          <button className="prev" onClick={sliderPrev}><Icon name='prev' size={24}/></button>
          <button className="next" onClick={sliderNext}><Icon name='forward' size={24}/></button>
          <ScrollContainer innerRef={favoritesRef} className="fav-category">
            {faveriteCategories.map((favorite) => {
              return <FavCategory favorite={favorite} key={favorite.id} />;
            })}
          </ScrollContainer>
          </div>
        </section>
        <section className="browse-all">
          <Title title="Browse all" />
          <div className="search-category">
            {categories.map((category) => {
              return <SearchCategory category={category} key={category.id} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Search;

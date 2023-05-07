import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../Icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../../stores/player";

const SongItem = ({ item }) => {
    const dispatch = useDispatch();
    const {current, playing, controls} = useSelector(state => state.player)

    const updateCurrent = () => {
      if(current.id === item.id) {
        if (playing) {
          controls.pause()
        } else {
          controls.play()
        }
      }else {
         dispatch(setCurrent(item))
      }
       
    }

    const isCurrentItem = (current?.id === item?.id  && playing)
  return (
    <>
      <NavLink className="box-item" key={item.id} to="/">
        <div className="item-cover">
          <img src={item.cover} alt="" className={item.type} />
          <button 
          onClick={updateCurrent}
          className={`box-play ${isCurrentItem ? 'visible' : ''}`}>
            <Icon name={isCurrentItem ? 'pause' : 'play'} size={24} />
          </button>
        </div>

        <h6 className="box-item-title">{item.title}</h6>
        <div className="item-desc">{item.description}</div>
      </NavLink>
    </>
  );
};

export default SongItem;

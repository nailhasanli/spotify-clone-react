import React from 'react'
import { useSelector } from 'react-redux'
import CustomRange from '../Range/CustomRange'
import Icon from '../../Icons'

const FullSreen = ({toggle,state, controls, audio,secondToTime, volumeIcon}) => {

    const {current} = useSelector(state => state.player)

    
  return (
    <div className='fullscreen'>
        <div className="bg-image" style={{backgroundImage: `url(${current.cover})`}}></div>
         <div className="center">
        <div className="fullscreen-player">
            <div>sol</div>
            <div className="top">
          <button className="top-player-btn">
            <Icon name="shuffle" size={24} />
          </button>
          <button className="top-player-btn">
            <Icon name="previos" size={24} />
          </button>
          <button
            className="top-player-btn play"
            onClick={controls[state?.playing ? "pause" : "play"]}
          >
            <Icon name={state?.playing ? "pause" : "playplayer"} size={24} />
          </button>
          <button className="top-player-btn">
            <Icon name="next" size={24} />
          </button>
          <button className="top-player-btn">
            <Icon name="repeat" size={24} />
          </button>
        </div>
        <div className='fullscreen-volume'>
        <button
          className="top-player-btn"
          onClick={controls[state.muted ? "unmute" : "mute"]}
        >
          <Icon name={volumeIcon} size={16} />
        </button>
        <div className="volume-range">
          <CustomRange
            step={0.01}
            max={1}
            min={0}
            value={state.muted ? 0 : state?.volume}
            onChange={(value) => controls.volume(value)}
          />
        </div>
        <button className="top-player-btn" onClick={toggle}>
          <Icon name="fullscreen" size={16} />
        </button>
        </div>
        </div>   
        <div className="bottom">
          {audio}
          <div className="music-duration">{secondToTime(state?.time)}</div>
          <CustomRange
            step={0.1}
            max={state?.duration || 1}
            min={0}
            value={state?.time}
            onChange={(value) => {
              controls.unmute();
              controls.seek(value);
            }}
          />
          <div className="music-duration">{secondToTime(state?.duration)}</div>
        </div>
      </div>
   
    </div>
  )
}

export default FullSreen
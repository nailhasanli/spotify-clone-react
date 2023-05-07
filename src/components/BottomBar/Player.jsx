import { useAudio, useFullscreen, useToggle } from "react-use";
import { secondToTime } from "../../utils";
import Icon from "../../Icons";
import CustomRange from "../Range/CustomRange";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying, setSidebar } from "../../stores/player";
import FullSreen from "./FullSreen";

const Player = () => {
  const fullscreenRef = useRef();
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(fullscreenRef, show, {
    onClose: () => toggle(false),
  });
  const dispatch = useDispatch();
  const { current, sidebar } = useSelector((state) => state.player);

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "muted";

    if (state.volume > 0 && state.volume < 0.33) return "low";

    if (state.volume > 0.33 && state.volume < 0.66) return "medium";

    return "high";
  }, [state.volume, state.muted]);
  return (
    <div className="player">
      <div className="left">
        <div className="current-player">
          {current && (
            <div className="left-items">
              {!sidebar && (
                <div className="left-cover">
                  <img src={current.cover} alt="" />
                  <button
                    onClick={() => dispatch(setSidebar(true))}
                    className="left-cover-btn"
                  >
                    <Icon name="arrowup" size={16} />
                  </button>
                </div>
              )}

              <div className="left-title">
                <h6>{current.title}</h6>
                <p>{current.artist}</p>
              </div>
              <div className="left-btn">
                <button className="top-player-btn">
                  <Icon name="savelibrary" size={16} />
                </button>
                <button className="top-player-btn">
                  <Icon name="pictureinpicture" size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="center">
        <div className="top">
          <button className="top-player-btn">
            <Icon name="shuffle" size={16} />
          </button>
          <button className="top-player-btn">
            <Icon name="previos" size={16} />
          </button>
          <button
            className="top-player-btn play"
            onClick={controls[state?.playing ? "pause" : "play"]}
          >
            <Icon name={state?.playing ? "pause" : "playplayer"} size={16} />
          </button>
          <button className="top-player-btn">
            <Icon name="next" size={16} />
          </button>
          <button className="top-player-btn">
            <Icon name="repeat" size={16} />
          </button>
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
      <div className="right">
        <button className="top-player-btn">
          <Icon name="lyrics" size={16} />
        </button>
        <button className="top-player-btn">
          <Icon name="queue" size={16} />
        </button>
        <button className="top-player-btn">
          <Icon name="device" size={16} />
        </button>
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
      <div ref={fullscreenRef}>
        {isFullscreen && <FullSreen toggle={toggle} state={state} controls={controls} secondToTime={secondToTime} volumeIcon={volumeIcon}/>}
      </div>
    </div>
  );
};

export default Player;

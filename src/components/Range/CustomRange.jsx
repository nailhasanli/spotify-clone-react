import React from "react";
import { Range, getTrackBackground } from "react-range";
import './Range.scss'

const CustomRange = ({value, step, min, max, onChange}) => {
  return (
    <div className="range-section">
         <Range
        values={[value]}
        step={step}
        min={min}
        max={max}
        onChange={values => onChange(values[0])}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "28px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              className="range"
              ref={props.ref}
              style={{
                
                height: "4px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: [value],
                  colors: ["#1db954", "#535353",],
                  min,
                  max,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            className={`${!isDragged ? 'range-badge' : ''}`}
            {...props}
            style={{
              ...props.style,
              height: "12px",
              width: "12px",
              borderRadius: "50%",
              backgroundColor: "#FFF",
              boxShadow: "0 2px 4px 0 rgba(0,0,0,.5)",
            }}
          />
        )}
      />
    </div>
  );
};

export default CustomRange;

import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import * as markerjs from "markerjs2";

import { mapperObj } from "./config";

export default function ImageMapper({ imageSrc, mapper, id, handleChange }) {
  const ref = useRef();

  const [mapperStateObj, setMapperStateObj] = useState(null);
  console.log({ mapper });
  console.log({ mapperStateObj });

  console.log({ ref });
  useEffect(() => {
    if (mapper.length > 0) {
      let formatterState = {
        heigth: ref?.currrent?.offsetHeight || 3296,
        width: ref?.currrent?.offsetWidth || 2544,
        markers: mapper?.map((coords) => formatter({ data: coords })),
      };
      setMapperStateObj(formatterState);
    }
  }, [mapper]);
  const showMarker = () => {
    let markerArea = new markerjs.MarkerArea(ref.current);
    console.log(markerArea.BASIC_MARKER_TYPES);
    // You can spread markerArea.BASIC_MARKER_TYPES but you have to handle all the differetn state gotten from different marker type
    markerArea.availableMarkerTypes = [markerArea.BASIC_MARKER_TYPES[0]];
    // at

    markerArea.addRenderEventListener((dataUrl, state) => {
      console.log({ state });
      // we are setting the markup result to replace our original image on the page
      // but you can set a different image or upload it to your server
      if (ref.current) {
        ref.current.src = dataUrl;
      }
    });

    // finally, call the show() method and marker.js UI opens
    markerArea.show();
    if (mapperStateObj) {
      markerArea.restoreState(mapperStateObj);
    }
  };

  return (
    <div className="center">
      <div></div>
      <div>
        <img ref={ref} id={id} alt="" src={imageSrc} onClick={showMarker} />
      </div>
    </div>
  );
}

ImageMapper.defaultProps = {
  imageSrc: null,
  mapper: mapperObj,
};

ImageMapper.propTypes = {
  imageSrc: null,
  mapper: PropTypes.object.isRequired,
};

const formatter = ({
  data,
  fillColor = "transparent",
  opacity = 1,
  state = "select",
  strokeColor = "#EF4444",
  strokeWidth = 3,
  typeName = "FrameMarker",
  visualTransformMatrix = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
  containerTransformMatrix = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
  strokeDasharray = "",
  rotationAngle = 0,
}) => {
  const height = data[7] - data[1];
  const width = data[2] - data[0];
  const left = data[0];
  const top = data[1];

  return {
    fillColor,
    height,
    left,
    opacity,
    state,
    strokeWidth,
    strokeColor,
    strokeDasharray,
    top,
    typeName,
    visualTransformMatrix,
    width,
    containerTransformMatrix,
    rotationAngle,
  };
};

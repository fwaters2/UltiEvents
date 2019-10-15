import React from "react";

export default function FullScreenMap(props) {
  const { value, index, dir } = props;

  return (
    <div style={{ height: "81vh" }} value={value} index={index} dir={dir}>
      <iframe
        title="GoogleMap"
        src="https://www.google.com/maps/d/u/0/embed?mid=16m6ry3YHf5R6FXDM_6wKrXCPWH7diZXG"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}



import React from "react";

export default function FullScreenMap(props) {
  const { value, index, dir } = props;

  return (
    <div className="Map-div" style={{ flex:1}} value={value} index={index} dir={dir}>
      <iframe
        title="GoogleMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840.2542800577721!2d120.30248540798631!3d22.70933144627817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0f83945211cf%3A0xc6f52d96c7553e47!2sNanzih%20District%2C%20Kaohsiung%20City%2C%20811!5e0!3m2!1sen!2stw!4v1570270148906!5m2!1sen!2stw"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

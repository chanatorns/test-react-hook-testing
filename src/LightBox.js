import React, { useState, useCallback } from "react";

function useFillColor() {
  const [light, setLight] = useState(false);
  const fillColor = light === true ? "#ffbb73" : "#000000";
  const toggle = ()=>setLight(!light);
  return {fillColor, light, toggle, setLight};
}

function LightBox() {
  let {fillColor, light, toggle} = useFillColor();

  return (
    <div className="App">
      <div>
        <p>Switch is {light.toString()}</p>
        <Box fillColor={fillColor} />
      </div>

      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

function Box(props) {
  return (
    <div style={{
      width: 200,
      height: 200,
      backgroundColor: props.fillColor,
      margin: 20
    }}></div>
  );
}

export {LightBox as default,  useFillColor};
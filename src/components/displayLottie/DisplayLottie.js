import React from "react";
import Lottie from "lottie-react";

export default function DisplayLottie({ animationData }) {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ height: "100%", width: "100%" }}
    />
  );
}

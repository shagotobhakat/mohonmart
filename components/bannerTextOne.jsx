"use client";
import BlurText from "./blurText";

export default function BannerTextOne({ triggerKey }) {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <BlurText
      text="Smart Accessories for Smart Work !!!"
      delay={150}
      animateBy="words"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      triggerKey={triggerKey} // new prop
    />
  );
}

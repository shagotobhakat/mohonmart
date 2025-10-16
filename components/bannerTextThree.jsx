"use client";
import BlurText from "./blurText";

export default function BannerTextThree({ triggerKey }) {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <BlurText
      text="Glow Like Never Before. !!!"
      delay={150}
      animateBy="words"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      triggerKey={triggerKey} // new prop
    />
  );
}

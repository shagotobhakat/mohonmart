"use client";
import BlurText from "./blurText";

export default function BannerTextTwo({ triggerKey }) {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <BlurText
      text="This is Not Just Clothing. It’s You. !!!"
      delay={150}
      animateBy="words"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      triggerKey={triggerKey} // new prop
    />
  );
}

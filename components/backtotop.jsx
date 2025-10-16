import styles from "./backtotop.module.css";
import React, { useEffect, useState } from "react";

export default function BackTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <h3 className={styles.main}>
            <i className="bi bi-chevron-double-up"></i>
          </h3>
        </div>
      )}
    </div>
  );
}

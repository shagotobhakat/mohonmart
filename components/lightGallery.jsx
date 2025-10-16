"use client";
import React, { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery-bundle.css";
import "./lightGallery.module.css";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

export default function GalleryLight() {
  const lightGallery = useRef(null);
  const [container, setContainer] = useState(null);

  const items = [
    {
      id: 1,
      src: "/category1.png",
      thumb: "/category1.png",
      subHtml: "<h4>Category 1</h4>",
    },
    {
      id: 2,
      src: "/category2.png",
      thumb: "/category2.png",
      subHtml: "<h4>Category 2</h4>",
    },
    {
      id: 3,
      src: "/category3.png",
      thumb: "/category3.png",
      subHtml: "<h4>Category 3</h4>",
    },
  ];

  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
      lightGallery.current.openGallery();
    }
  }, []);

  const onNextSlide = useCallback((detail) => {
    const index = detail.index || 0;
    console.log("Current slide:", index + 1);
  }, []);

  const setContainerRef = useCallback((node) => {
    if (node !== null) {
      setContainer(node);
    }
  }, []);

  const getLgComponent = () => {
    if (container !== null) {
      return (
        <LightGallery
          plugins={[lgZoom, lgThumbnail]}
          enableThumbSwipe
          dynamic
          dynamicEl={items}
          onInit={onInit}
          onNextSlide={onNextSlide}
          container={container}
          hash={false}
          closable={true}
          showMaximizeIcon={true}
          download={false}
        />
      );
    }
    return null;
  };

  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: "550px",
          paddingBottom: "60%",
        }}
        ref={setContainerRef}></div>
      {getLgComponent()}
    </div>
  );
}

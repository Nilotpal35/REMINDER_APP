import { useState } from "react";
import { icons } from "../assets/images";

export default function Icons({ selectedImage, setSelectedImage }) {
  return (
    <div className="icons">
      {Object.values(icons).map((item) => (
        <img
          src={item}
          key={Math.random().toString()}
          onClick={() => setSelectedImage(item)}
          className={item === selectedImage ? "active" : ""}
          onDoubleClick={() => setSelectedImage(null)}
        />
      ))}
    </div>
  );
}

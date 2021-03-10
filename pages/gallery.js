import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import styles from "../styles/Gallery.module.css";

function Gallery() {
  const [imageIds, setImageIds] = useState();
  const loadImages = async () => {
    try {
      const res = await fetch("/api/images");
      const data = await res.json();
      setImageIds(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div>
      <div className={styles.gallery}>
        {imageIds &&
          imageIds.map((imageId, index) => (
            <Image
              key={index}
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLIENT_NAME}
              publicId={imageId}
              width="300"
              crop="scale"
            />
          ))}
      </div>
    </div>
  );
}

export default Gallery;

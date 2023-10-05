import React from "react";
import images from "./images";
import styles from "./imageCard.module.css";

const ImageCard = () => {
  return (
    <div className={styles.principalcontainer}>
      {images.map((image, index) => (
        <div className={styles.card} key={index}>
          <img className={styles.img} src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageCard;

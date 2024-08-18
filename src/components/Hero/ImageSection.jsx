import React from "react";
import heroimg1 from "../../assets/heroimg1.svg";
import heroimg2 from "../../assets/heroimg2.svg";
import heroimg3 from "../../assets/heroimg3.svg";
import heroimg4 from "../../assets/heroimg4.svg";
import heroimg5 from "../../assets/heroimg5.svg";
import heroimg6 from "../../assets/heroimg6.svg";
import heroimg7 from "../../assets/heroimg7.svg";
import heroimg8 from "../../assets/heroimg8.svg";

const ImageSection = () => {
  const imgTopToBottom = [heroimg1, heroimg2, heroimg3, heroimg4];
  const imgBottomToTop = [heroimg5, heroimg6, heroimg7, heroimg8];
  const imgLeftToRight = [...imgTopToBottom,...imgBottomToTop];
  
  return (
    <div className="img-section">
      <div className="img-col">
        {imgBottomToTop.map((image, index) => (
          <img key={index} src={image} alt={`bottom-image-${index}`} />
        ))}
      </div>
      <div className="img-col-rev">
        {imgTopToBottom.map((image, index) => (
          <img key={index} src={image} alt={`top-image-${index}`} />
        ))}
      </div>
      <div className="img-col-mobile">
        {imgLeftToRight.map((image, index) => (
          <img key={index} src={image} alt={`bottom-image-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageSection;

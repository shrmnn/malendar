import {useEffect, useState} from "react";

const usePlaceholderImage = (src) => {
  const [sourceLoaded, setSourceLoaded] = useState(null);

  useEffect(() => {
    const img = new Image();
    try {
      img.src = src;
      img.onload = () => setSourceLoaded(src);
    } catch (e) {
      console.log(e);
    }
  }, [src]);

  return sourceLoaded;
};

export default usePlaceholderImage;

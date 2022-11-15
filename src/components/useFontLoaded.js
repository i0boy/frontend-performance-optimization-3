import FontFaceObserver from "fontfaceobserver";
import React from "react";

export const useFontLoaded = (fontname) => {
  const [load, setLoad] = React.useState(false);
  React.useEffect(() => {
    const font = new FontFaceObserver(fontname);
    font.load().then(() => {
      setLoad((_) => true);
    });
  }, [fontname]);

  return load;
};

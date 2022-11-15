import React from "react";
import { useObserve } from "../useOvserve";
function Card(props) {
  const imgRef = useObserve(React.useRef(null));

  return (
    <div className="Card text-center">
      {/* 처음에 dataset에 바인딩 했다가 보이면 로드 */}
      <picture>
        <source data-srcset={props.webp} type="image/webp" />
        <img data-src={props.image} ref={imgRef} alt="longboard images" />
      </picture>
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
}

export default Card;

import React from "react";

function Card(props) {
  const imgRef = React.useRef(null);

  React.useEffect(() => {
    const options = {};
    /** 콜백은 처음 로드 시에도 실행 */
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="Card text-center">
      {/* 처음에 dataset에 바인딩 했다가 보이면 로드 */}
      <img data-src={props.image} ref={imgRef} alt="longboard images" />
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
}

export default Card;

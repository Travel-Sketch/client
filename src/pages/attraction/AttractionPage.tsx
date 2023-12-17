import {useEffect} from "react";
import AttractionSearchForm from "./AttractionSearchForm";

declare global {
  interface Window {
    kakao?: any;
  }
}

const AttractionPage = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    let map = new window.kakao.maps.Map(container, options);
  }, [])

  return (
    <div>
      <AttractionSearchForm />
      <div id='map' style={{width:'100%', height: '800px'}}></div>
    </div>
  );
};

export default AttractionPage;
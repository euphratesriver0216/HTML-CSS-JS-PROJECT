function mapMaker(objectId, locationLat, locationLng) {
  let mapContainer = document.getElementById(objectId); // 지도를 표시할 div
  let mapOption = {
    center: new kakao.maps.LatLng(locationLat, locationLng), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
    mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
  };

  // 지도를 생성한다
  let map = new kakao.maps.Map(mapContainer, mapOption);
  // 마커가 표시될 위치입니다
  let markerPosition = new kakao.maps.LatLng(locationLat, locationLng);

  // 마커를 생성합니다
  let marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
  // marker.setMap(null);
  // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
  var mapTypeControl = new kakao.maps.MapTypeControl();

  // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
  // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
  map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

  // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
  var zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}
// mapMaker("map", 37.53974304834989, 127.12333588830214); //지도를 표시할 객체의 아이디, 표시할 위치의 위도, 표시할 위치의 경도 입력
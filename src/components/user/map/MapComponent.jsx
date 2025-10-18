import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './MapComponent.css';
import ReactDOM from 'react-dom';

const markers = [
  { id: 1, name: 'Chris Shop', lngLat: [-73.9688, 40.7114] },
  { id: 2, name: 'Maintenance Wiz', lngLat: [-73.9615, 40.7104] },
  { id: 3, name: 'That Shop', lngLat: [-73.9588, 40.7134] },
];

const Marker = ({ name }) => (
  <div className="marker-container">
    <div className="marker-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="42" viewBox="0 0 36 42" fill="none">
        <defs>
          <linearGradient id="customGradient" x1="18" y1="4" x2="18" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0F33B4" />
            <stop offset="1" stopColor="#1144FA" />
          </linearGradient>
        </defs>
        <path d="M18 17C18.6875 17 19.2763 16.7452 19.7663 16.2356C20.2554 15.7269 20.5 15.115 20.5 14.4C20.5 13.685 20.2554 13.0727 19.7663 12.5631C19.2763 12.0544 18.6875 11.8 18 11.8C17.3125 11.8 16.7242 12.0544 16.235 12.5631C15.745 13.0727 15.5 13.685 15.5 14.4C15.5 15.115 15.745 15.7269 16.235 16.2356C16.7242 16.7452 17.3125 17 18 17ZM18 30C14.6458 27.0317 12.1408 24.2744 10.485 21.7281C8.82833 19.1827 8 16.8267 8 14.66C8 11.41 9.00542 8.82083 11.0163 6.8925C13.0262 4.96417 15.3542 4 18 4C20.6458 4 22.9737 4.96417 24.9837 6.8925C26.9946 8.82083 28 11.41 28 14.66C28 16.8267 27.1721 19.1827 25.5163 21.7281C23.8596 24.2744 21.3542 27.0317 18 30Z" fill="url(#customGradient)" />
      </svg>
    </div>
    <div className="marker-label-box">{name}</div>
  </div>
);

const Popup = ({ name }) => (
  <div className="popup-card">
    <strong>{name}</strong><br />
    📞 01000000000<br />
    ⏱ Available now<br />
    ⭐ 4.8 rating<br />
    <button className="popup-button">Book Now</button>
  </div>
);

const MapComponent = () => {
const mapRef = useRef(null);

useEffect(() => {
  const map = new maplibregl.Map({
    container: mapRef.current,
    style: 'https://api.maptiler.com/maps/0197831e-5e9c-733b-b54f-7388e1b396ce/style.json?key=FNCBtoIjZzBq21N1NmhR',
    center: [-73.9628, 40.7118],
    zoom: 16,
  });

  // Disable map dragging by default
  map.dragPan.disable();

  // Enable drag only when 2 fingers are used
  const handleTouch = (e) => {
    if (e.touches && e.touches.length === 2) {
      map.dragPan.enable();
    } else {
      map.dragPan.disable();
    }
  };

  // Attach touch event listeners to map container
  const container = mapRef.current;
  container.addEventListener('touchstart', handleTouch);
  container.addEventListener('touchmove', handleTouch);
  container.addEventListener('touchend', handleTouch);
  container.addEventListener('touchcancel', handleTouch);

  // Add markers and popups
  markers.forEach(({ lngLat, name }) => {
    const markerNode = document.createElement('div');
    ReactDOM.render(<Marker name={name} />, markerNode);

    const marker = new maplibregl.Marker(markerNode).setLngLat(lngLat).addTo(map);

    const popupNode = document.createElement('div');
    ReactDOM.render(<Popup name={name} />, popupNode);

    const popup = new maplibregl.Popup({ offset: 25 }).setDOMContent(popupNode);
    marker.setPopup(popup);
  });

  // Cleanup
  return () => {
    map.remove();
    container.removeEventListener('touchstart', handleTouch);
    container.removeEventListener('touchmove', handleTouch);
    container.removeEventListener('touchend', handleTouch);
    container.removeEventListener('touchcancel', handleTouch);
  };
}, []);


  return <div ref={mapRef} className="map-container" />;
};

export default MapComponent;

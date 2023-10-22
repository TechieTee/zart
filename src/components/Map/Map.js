import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { useRef, useState, useEffect } from 'react';
import bbox from '@turf/bbox';
import { lineString } from '@turf/helpers';

import PropTypes from 'prop-types'
import ReactMapGl, {
  GeolocateControl,
  Marker,
  NavigationControl,
  AttributionControl,
  FullscreenControl,
  Popup,
  Source,
  Layer,
  LinearInterpolator,
  WebMercatorViewport,
} from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import pin from '../../assets/icons/pin.png';
import {
  heatmapStyleConfig,
  attributionStyle,
  fullscreenControlStyle,
  geolocateControlStyle,
  geoJsonGenerator,
  clusterCountLayer,
  clusterLayer,
  unclusteredPointLayer,
  coordinateGenerator,
} from './config';
import classes from './Map.module.css';


export default function Map({
  markers,
  searchRequired,
  geoLocationRequired,
  fullScreenRequired,
  navigationControlRequired,
  style,
  zoomLevel,
  heatMapData,
  data,
  utilizeCluster,
}) {
  const [viewPort, setViewPort] = useState({
    latitude: 9.082,
    longitude: 8.6753,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });
  const [mapStyleList] = useState({
    satelliteStyle: 'satellite-v9',
    navigationStyle: 'navigation-day-v1',
    navigationNightStyle: 'navigation-night-v1',
    lightStyle: 'light-v10',
    darkStyle: 'dark-v10',
    satelliteStreetStyle: 'satellite-streets-v11',
    streetStyle: 'streets-v11',
    outdoorStyle: 'outdoors-v11',
  });

  const [mapStyle, setMapStyle] = useState(mapStyleList.streetStyle);
  const [coordinates, setCoordinates] = useState([]);
  const [clusterData, setClusterData] = useState(null);
  const [popInfo, setPopInfo] = useState(null);

  useEffect(() => {
    style && setMapStyle(mapStyleList[style]);
    zoomLevel && setViewPort((viewPort) => ({ ...viewPort, zoom: zoomLevel }));
  }, []);

  useEffect(() => {
    if (utilizeCluster) {
      let tempData = geoJsonGenerator(data);
      setClusterData(tempData);
    }
  }, [data]);

  useEffect(() => {
    if (markers?.length > 0) {
      let markersCoordinate = coordinateGenerator(markers);
      const temp = lineString(markersCoordinate);
      const [minLng, minLat, maxLng, maxLat] = bbox(temp);
      const vp = new WebMercatorViewport({
        ...viewPort,
        width: 600,
        height: 600,
      });
      const { longitude, latitude, zoom } = vp.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat],
        ],
        {
          padding: 20,
        }
      );
      setCoordinates(markers);

      setViewPort({
        ...viewPort,
        longitude,
        latitude,
        zoom,
        transitionDuration: 1000,
        transitionInterpolator: new LinearInterpolator(),
      });
    }
  }, [markers]);

  const mapRef = useRef();

  const handleViewChange = (viewport) => {
    setViewPort({ ...viewport });
  };

  const onClick = (event) => {
    if (event.features[0]) {
      const feature = event.features[0];
      if (feature.properties.cluster_id) {
        const clusterId = feature.properties.cluster_id;

        const mapboxSource = mapRef.current.getMap().getSource('earthquakes');

        mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) {
            return;
          }

          setViewPort({
            ...viewPort,
            longitude: feature.geometry.coordinates[0],
            latitude: feature.geometry.coordinates[1],
            zoom,
            transitionDuration: 500,
          });
        });
      }
    }
  };

  return (
    <div>
      <select
        value={mapStyle}
        onChange={(e) => {
          setMapStyle(e.target.value);
        }}>
        {Object.entries(mapStyleList).map((style) => (
          <option key={style} value={style[1]}>
            {style[0]}
          </option>
        ))}
      </select>
      <ReactMapGl
        ref={mapRef}
        {...viewPort}
        onViewportChange={handleViewChange}
        attributionControl={false}
        height='60vh'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={`mapbox://styles/mapbox/${mapStyle}`}
        onClick={onClick}
        width='50vw'>
        <AttributionControl compact={true} style={attributionStyle} />
        {fullScreenRequired && (
          <FullscreenControl style={fullscreenControlStyle} />
        )}
        {heatMapData && (
          <Source type='geojson' data={heatMapData}>
            <Layer {...heatmapStyleConfig} />
          </Source>
        )}
        {geoLocationRequired && (
          <GeolocateControl
            style={geolocateControlStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation
          />
        )}

        {searchRequired && (
          <Geocoder
            onViewportChange={handleViewChange}
            countries='Ng'
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapRef={mapRef}
          />
        )}

        {utilizeCluster && (
          <Source
            id='earthquakes'
            type='geojson'
            data={clusterData}
            cluster={true}
            clusterMaxZoom={14}
            clusterRadius={50}>
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
          </Source>
        )}

        {popInfo && (
          <Popup
            tipSize={5}
            anchor='top'
            longitude={popInfo.longitude}
            latitude={popInfo.latitude}
            closeOnClick={false}
            onClose={setPopInfo}>
            <p> Nothing to Show for now </p>
          </Popup>
        )}
        {navigationControlRequired && <NavigationControl />}

        {coordinates?.map((coordinate, i) => {
          return (
            <Marker
              key={i}
              latitude={coordinate.latitude}
              longitude={coordinate.longitude}
              offsetLeft={coordinate.offsetLeft}
              offsetTop={coordinate.offsetLeft}>
              <img
                className={classes.pin}
                src={pin}
                alt=''
                width='30'
                height='30'
                onClick={() => setPopInfo(coordinate)}
              />
            </Marker>
          );
        })}
      </ReactMapGl>
    </div>
  );
}

Map.defaultProps = {
  fullScreenRequired: true,
  markers: null,
  searchRequired: false,
  geoLocationRequired: false,
  navigationControlRequired: false,
  style: 'navigationNightStyle',
  zoomLevel:null,
  heatMapData:null,
  data:null,
  utilizeCluster:false
};

Map.propTypes = {
  fullScreenRequired: PropTypes.bool,
  markers: PropTypes.arrayOf(PropTypes.object),
  searchRequired: PropTypes.bool,
  geoLocationRequired: PropTypes.bool,
  navigationControlRequired: PropTypes.bool,
  style: PropTypes.string,
  zoomLevel: PropTypes.string,
  heatMapData: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  utilizeCluster: PropTypes.bool,
};

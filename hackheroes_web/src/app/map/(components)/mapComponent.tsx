import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat} from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Overlay from 'ol/Overlay';
import { Select } from 'ol/interaction';
import { click } from 'ol/events/condition';
import fetchLocations from '../../api/locations';
import Cluster from 'ol/source/Cluster';
import { Circle as CircleStyle, Fill, Stroke, Text } from 'ol/style';
import { memo, useEffect, useRef, useState } from 'react';
import { Location } from '@/app/types/location';

const MapComponent = memo(function MapComponent() {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const popupRef = useRef<HTMLDivElement | null>(null);
    const map = useRef<Map | null>(null);
  
    const [selectedLocation, setSelectedLocation] = useState<Feature | null>(null);
  
    // Function to generate a small random offset in meters
    const getRandomOffset = () => {
      const offset = 0.0001; // Adjust this value to control the separation distance
      return (Math.random() - 0.5) * offset;
    };
  
    useEffect(() => {
      fetchLocations()
        .then(( data ) => {
          if (mapRef.current && !map.current) {
            const vectorSource = new VectorSource();
  
            data.forEach((location: Location) => {
                let { latitude, longitude } = location.coordinates;
    
                // Apply random offset to the coordinates
                longitude += getRandomOffset();
                latitude += getRandomOffset();
    
                const marker = new Feature({
                    geometry: new Point(fromLonLat([longitude, latitude])),
                    name: location.name,
                    id: location._id,
                    type: location.type,
                    address: location.address,
                    description: location.description,
                    opening_hours: location.opening_hours,
                });
    
                const iconSrc = 'map-marker.svg'; // Default marker
    
                marker.setStyle(
                    new Style({
                        image: new Icon({
                            src: iconSrc,
                            scale: 0.04,
                            anchor: [0.5, 1],
                        }),
                    })
                );
    
                vectorSource.addFeature(marker);
                });
    
                const clusterSource = new Cluster({
                distance: 20,
                source: vectorSource,
                });
    
                const clusterLayer = new VectorLayer({
                source: clusterSource,
                style: (feature) => {
                    const size = feature.get('features').length;
                    let style;
                    if (size > 1) {
                    style = new Style({
                        image: new CircleStyle({
                        radius: 10,
                        stroke: new Stroke({
                            color: '#fff',
                        }),
                        fill: new Fill({
                            color: '#3399CC',
                        }),
                        }),
                        text: new Text({
                        text: size.toString(),
                        fill: new Fill({
                            color: '#fff',
                        }),
                        }),
                    });
                    } else {
                    const originalFeature = feature.get('features')[0];
                    style = originalFeature.getStyle();
                    }
                    return style;
                },
            });
  
            const overlay = new Overlay({
              element: popupRef.current || undefined,
              positioning: 'bottom-center',
              stopEvent: true, // Set stopEvent to
              offset: [0, 150],
            });
  
            map.current = new Map({
              target: mapRef.current,
              layers: [
                new TileLayer({
                  source: new OSM(),
                }),
                clusterLayer,
              ],
              view: new View({
                center: fromLonLat([19.9363912, 50.0573861]), // Longitude and Latitude for the map center
                zoom: 13, // Zoom level
              }),
              overlays: [overlay],
            });
  
            const selectClick = new Select({
              condition: click,
            });
  
            map.current.addInteraction(selectClick);
  
            selectClick.on('select', (event) => {
              const feature = event.selected[0];
              if (feature) {
                const features = feature.get('features');
                if (features.length === 1) {
                  const originalFeature = features[0];
                  const geometry = originalFeature.getGeometry() as Point;
                  const coordinates = geometry.getCoordinates();
                  overlay.setPosition(coordinates);
                  setSelectedLocation(originalFeature);
                } else {
                  setSelectedLocation(null);
                }
              } else {
                setSelectedLocation(null);
              }
            });
          }
        })
    }, []);
  
    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <div ref={mapRef} style={{ flex: '3', height: '100vh' }} id="map"></div>
        <div
          ref={popupRef}
          style={{
            position: 'absolute',
            backgroundColor: 'black',
            padding: '5px',
            border: '1px solid black',
            borderRadius: '4px',
            bottom: '50px',
            transform: 'translate(-50%, -100%)',
            minWidth: '14em',
            display: selectedLocation ? 'block' : 'none', // Hide the popup when no school is selected
          }}
        >
          {selectedLocation && (
            <div>
                <div className='text-white'>
                    <div>
                      <div><strong>{selectedLocation.get('name')}</strong></div>
                      <div className='text-green-green'><strong>{selectedLocation.get('type')}</strong></div>
                      <div>{selectedLocation.get('address')}</div>
                    </div>
                    <hr />
                    <div>{selectedLocation.get('description')}</div>
                </div>
            </div>
          )}
        </div>
      </div>
    );
  });

export default MapComponent
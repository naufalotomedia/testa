import React, { useEffect, useState } from "react";
import { GoogleMaps } from "expo-maps";
import * as Location from "expo-location";
import { Icons } from "@utils/icons";

export default function AbsensiScreen() {
  const [mapsReady, setMapsReady] = useState(false);
  const [latitude, setLatitude] = useState<any>(null);
  const [longitude, setLongitude] = useState<any>(null);

  useEffect(() => {
    async function getStatus() {
      try {
        let locationStatus = await Location.getProviderStatusAsync();
        if (locationStatus?.locationServicesEnabled) {
          let currentPosisition = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Highest,
          });

          setLatitude(currentPosisition?.coords?.latitude);
          setLongitude(currentPosisition?.coords?.longitude);
        }
      } catch (error) {
        setMapsReady(false);
      } finally {
        setMapsReady(true);
      }
    }

    getStatus();
  }, []);

  if (!mapsReady) {
    return null;
  }

  return (
    <GoogleMaps.View
      cameraPosition={{
        coordinates: { latitude: latitude, longitude: longitude },
        zoom: 12,
      }}
      uiSettings={{
        compassEnabled: false,
        zoomControlsEnabled: false,
        myLocationButtonEnabled: false,
        mapToolbarEnabled: false,
      }}
      markers={[
        {
          coordinates: { latitude: latitude, longitude: longitude },
          icon: <Icons.camera />,
        },
      ]}
      style={{ flex: 1 }}
    />
  );
}

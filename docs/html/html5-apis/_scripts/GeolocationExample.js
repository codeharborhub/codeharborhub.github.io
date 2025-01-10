import React, { useState } from "react";

const GeolocationExample = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(""); // Clear any previous errors
        },
        () => {
          setError("Unable to retrieve location.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <h1>Geolocation API Example</h1>
      <p>Click the button to get your current location.</p>
      <button onClick={getLocation}>Get Location</button>
      
      <br />

      {location && (
        <p>
          Latitude: {location.latitude} <br />
          Longitude: {location.longitude}
        </p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default GeolocationExample;

import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const apiKey = "d02dc36b0d5f33369dbd7597374f8250";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`;

  const getWeatherData = (event) => {
    if (event.key === "Enter") {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setLocation("");
          console.log(data);
        });
    }
  };

  return (
    <div>
      <Search
        location={location}
        setLocation={setLocation}
        getWeatherData={getWeatherData}
      />
      {typeof weatherData.main === "undefined" ? (
        <Flex justify="center">
          <Text fontSize="3xl">Enter a city name.</Text>
        </Flex>
      ) : (
        <Weather weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;

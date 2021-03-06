import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Clear from "./assets/clear.jpg";
import Clouds from "./assets/cloudy.jpg";
import Rain from "./assets/rain.jpg";
import Haze from "./assets/haze.jpg";
import Thunderstorm from "./assets/thunderstorm.jpg";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [weatherImage, setWeatherImage] = useState(Clear);
  const [isLoading, setIsLoading] = useState(true);

  const cacheImage = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };

  useEffect(() => {
    const images = [Clear, Clouds, Rain, Haze, Thunderstorm];
    cacheImage(images);
  }, []);

  const apiKey = "d02dc36b0d5f33369dbd7597374f8250";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`;

  const getWeatherData = (event) => {
    if (event.key === "Enter") {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          const weather = data.weather[0].main;
          switch (weather) {
            case "Drizzle" || "Rain":
              setWeatherImage(Rain);
              break;
            case "Clouds":
              setWeatherImage(Clouds);
              break;
            case "Thunderstorm":
              setWeatherImage(Thunderstorm);
              break;
            case "Haze":
              setWeatherImage(Haze);
              break;
            default:
              setWeatherImage(Clear);
          }
          setLocation("");
          event.target.blur();
        });
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url(${weatherImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        >
          <Search
            location={location}
            setLocation={setLocation}
            getWeatherData={getWeatherData}
          />
          {typeof weatherData.main === "undefined" ? (
            <Flex justify="center">
              <Text fontSize="3xl" color="gray.600">
                Enter a city name..
              </Text>
            </Flex>
          ) : (
            <Weather weatherData={weatherData} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;

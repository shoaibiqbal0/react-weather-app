import { Image, Text, VStack } from "@chakra-ui/react";

const Weather = ({ weatherData }) => {
  return (
    <div>
      <VStack>
        <Text>{weatherData.name}</Text>
        <Text>{Math.round(weatherData.main.temp)}°C</Text>
        <Text>{weatherData.weather[0].main}</Text>
        <Image
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        ></Image>
      </VStack>
    </div>
  );
};

export default Weather;

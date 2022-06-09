import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

const Weather = ({ weatherData }) => {
  return (
    <Flex justify="center">
      <VStack>
        <Text fontSize="8xl" fontWeight="bold">
          {weatherData.name}
        </Text>
        <HStack>
          <VStack p="5" spacing="10">
            <Text fontSize="7xl">{Math.round(weatherData.main.temp)}°C</Text>
            <Text>Feels like {Math.round(weatherData.main.feels_like)}°C</Text>
          </VStack>
          <VStack p="5" spacing="10">
            <Image
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            />
            <Text>{weatherData.weather[0].main}</Text>
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Weather;

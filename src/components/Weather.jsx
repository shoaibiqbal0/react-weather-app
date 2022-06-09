import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

const Weather = ({ weatherData }) => {
  const country = weatherData.sys.country.toLowerCase();
  return (
    <Flex justify="center">
      <VStack>
        <HStack>
          <Text
            bgGradient="linear(to-r, gray.100, gray.200, gray.300)"
            bgClip="text"
            px="5"
            fontSize={["6xl", "6xl", "8xl"]}
            fontWeight="bold"
          >
            {weatherData.name}
          </Text>
          <Image w="36px" src={`https://flagcdn.com/36x27/${country}.webp`} />
        </HStack>
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

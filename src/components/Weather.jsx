import {
  Flex,
  HStack,
  Image,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";

const Weather = ({ weatherData }) => {
  const country = weatherData.sys.country.toLowerCase();
  return (
    <Flex justify="center">
      <VStack
        bgGradient="linear(to-b, gray.700, gray.800, gray.900)"
        px="5"
        borderRadius="10"
        divider={<StackDivider borderColor="gray.700" />}
      >
        <HStack>
          <Text
            color="gray.200"
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
            <Text color="gray.200" fontSize="7xl">
              {Math.round(weatherData.main.temp)}°C
            </Text>
            <Text color="gray.200">
              Feels like {Math.round(weatherData.main.feels_like)}°C
            </Text>
          </VStack>
          <VStack p="5" spacing="10">
            <Image
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            />
            <Text color="gray.200">{weatherData.weather[0].main}</Text>
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Weather;

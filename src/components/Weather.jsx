import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

const Weather = ({ weatherData }) => {
  const country = weatherData.sys.country.toLowerCase();
  return (
    <Flex justify="center">
      <VStack
        bgImage="linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)"
        bgColor="#8BC6EC"
        p="5"
        borderRadius="10"
      >
        <HStack>
          <Text
            color="gray.700"
            p="5"
            fontSize={["2xl", "4xl", "5xl"]}
            fontWeight="bold"
            flexWrap="wrap"
          >
            {weatherData.name}
          </Text>
          <Image w="36px" src={`https://flagcdn.com/36x27/${country}.webp`} />
        </HStack>
        <HStack spacing="3rem">
          <VStack p="2" spacing="2rem">
            <Text color="gray.700" fontSize={["3xl", "4xl", "5xl"]}>
              {Math.round(weatherData.main.temp)}°C
            </Text>
            <Text color="gray.700">
              Feels like {Math.round(weatherData.main.feels_like)}°C
            </Text>
          </VStack>
          <VStack p="2">
            <Image
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            />
            <Text fontSize={["1xl", "1xl", "2xl"]} color="gray.700">
              {weatherData.weather[0].main}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Weather;

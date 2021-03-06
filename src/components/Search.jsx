import { Flex, Input } from "@chakra-ui/react";

const Search = (props) => {
  const handleChange = (event) => {
    props.setLocation(event.target.value);
  };

  return (
    <Flex justify="center" p="10">
      <Input
        maxW="500px"
        color="white"
        borderRadius="full"
        value={props.location}
        onChange={handleChange}
        onKeyDown={props.getWeatherData}
        placeholder="Enter a city name.."
      />
    </Flex>
  );
};

export default Search;

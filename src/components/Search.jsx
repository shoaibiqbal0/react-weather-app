import { Flex, Input } from "@chakra-ui/react";

const Search = (props) => {
  const handleChange = (event) => {
    props.setLocation(event.target.value);
  };

  return (
    <Flex justify="center" p="10">
      <Input
        variant="filled"
        maxW="500px"
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

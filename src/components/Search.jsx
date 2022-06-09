import { Flex, Input } from "@chakra-ui/react";

const Search = (props) => {
  const handleChange = (event) => {
    props.setLocation(event.target.value);
  };

  return (
    <Flex justify="center" p="10">
      <Input
        maxW="1000px"
        borderRadius="20"
        value={props.location}
        onChange={handleChange}
        onKeyDown={props.getWeatherData}
      />
    </Flex>
  );
};

export default Search;

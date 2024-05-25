
import React, { useState } from 'react';
import { Box, Input, Button, FormErrorMessage } from '@chakra-ui/react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }
    onSearch(city);
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
    setError('');
  };

  return (
    <Box  display="flex" justifyContent="center" mb={4} maxW="800px" mx={"auto"}>
      <Box  p="5px" borderRadius={"30px"}  border={"1px solid black"} display="flex" w={"100%"}>
      <Input
      mr='0px'
      _focusVisible={"border:none"}
      bg={"transparent"}
   border="none"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name"

 placeholderTextColor="black"
        isInvalid={!!error}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
      <Button colorScheme={"black"} fontSize={{base:'12px',md:'20px'}} bg={"black"} py="10px " px={{base:'20px',md:'40px'}}  borderRadius={"30px"}  color="white" onClick={handleSearch}>Search</Button>
      </Box>
   <Box  textAlign={"center"}>
   {error && <FormErrorMessage>{error}</FormErrorMessage>}
   </Box>
     
    </Box>
  );
};

export default SearchBar;

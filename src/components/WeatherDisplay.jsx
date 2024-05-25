import React from 'react';
import { Box, Text, Spinner } from '@chakra-ui/react';
import {  WiHumidity } from 'react-icons/wi';
import {getWeatherIconComponent} from "../utils/getWeatherIconComponent"


const WeatherDisplay = ({ weatherData, loading, error }) => {
  if (loading) return <Spinner size="xl" />;
  if (error) return <Box>{error}</Box>;

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

 

  return (
    <>
      {weatherData && (
        <Box
          mt="40px"
          p={4}
          borderRadius="md"
          textAlign="center"
          color="white"
          bg="transparent"
          maxW="800px"
          mx="auto"
        >
          <Box display={"flex"} justifyContent="center" alignItems="center" fontSize="2xl">
            {getWeatherIconComponent(weatherData.weather[0].description, "200px")}
          </Box>
          <Box>
            <Text textAlign={"center"} fontSize={{base:'20px',md:'47px'}} color="black">{weatherData.name}</Text>
            <Text fontSize={{base:'20px',md:'47px'}} fontWeight={"600"} color="black" > {weatherData.main.temp} <Text as="span" color='red'>°C</Text></Text>
            <Text fontSize={{base:'20px',md:'32px'}}  color="black"> condition: <Text as="span" color='blue'>{weatherData.weather[0].description}</Text></Text>
            <Box display="flex" alignItems="center" justifyContent="center">
              <WiHumidity size="1.5em" />
              <Text fontSize="lg" color="black" ml="0.5em">Humidity: {weatherData.main.humidity}%</Text> 
            </Box>
            <Text fontSize="lg" color="black"> {currentDayOfWeek} - {currentDate.toLocaleDateString()}</Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default WeatherDisplay;

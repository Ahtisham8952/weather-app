// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError("");
    try {
      const [currentWeather] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
        ),
      ]);

      console.log(currentWeather);
      setWeatherData(currentWeather.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please enter a valid city name.");
      } else {
        setError("Failed to fetch weather data");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      className="app"
      p={4}
      bgImage="url('/images/background.png')"
      h={"100vh"}
      w="100%"
      bgSize="cover"
      bgPosition="center"
    >
      <Box
        bg="rgb(114, 111, 131,0.5)"
        borderRadius="lg"
        padding={"30px"}
        maxW="800px"
        mx="auto"
        my={{ base: "20px", md: "100px" }}
      >
        <Text color="black" fontSize={"4xl"} textAlign="center" mb="30px">
          {" "}
          Weather
        </Text>
        <SearchBar onSearch={setCity} />
        <WeatherDisplay
          weatherData={weatherData}
          loading={loading}
          error={error}
        />
      </Box>
    </Box>
  );
};

export default App;

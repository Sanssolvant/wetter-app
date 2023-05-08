import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyD7J_ZfGFqxcyrUxoILxSULQHKWZMKjj-o");

export default function SearchBar(props) {
	const [location, setLocation] = useState("");

	const locationChangeHandler = (event) => {
		setLocation(event.target.value);
	};

	function submitHandler(event) {
		event.preventDefault();
		// Use the Geocode library to convert the location to coordinates
		Geocode.fromAddress(location)
			.then(
				(response) => {
					const { lat, lng } = response.results[0].geometry.location;
					return { lat, lng };
				},
				(error) => {
					console.error(error);
				}
			)
			.then((coords) => {
				return fetch(
					`https://api.stormglass.io/v2/weather/point?lat=${coords.lat}&lng=${coords.lng}&params=windSpeed,airTemperature,precipitation`,
					{
						headers: {
							Authorization:
								"14029144-ec47-11ed-92e6-0242ac130002-140291da-ec47-11ed-92e6-0242ac130002",
						},
					}
				)
					.then((response) => response.json())
					.then((data) => {
						const weatherData = [];
						let dateObj;
						let start = 0;
						let increment = 0;
						for (let i = 0; i < 7; i++) {
							let sumWindspeed = 0;
							let sumAirTemperature = 0;
							let sumPrecipitation = 0;
							for (let index = 0; index < 24; index++) {
								increment = start + index;
								sumWindspeed += data.hours[increment].windSpeed.sg;
								sumAirTemperature += data.hours[increment].airTemperature.sg;
								sumPrecipitation += data.hours[increment].precipitation.sg;
							}
							dateObj = new Date(data.meta.start); //create a Date object from the string
							dateObj.setDate(dateObj.getDate() + i); //add one day to the date
							let newDateString = dateObj.toISOString().slice(0, 10); //get the resulting date string without the time component

							let dayObject = {
								Day: newDateString,
								Windspeed: sumWindspeed / 24,
								AirTemperature: sumAirTemperature / 24,
								Precipitation: sumPrecipitation / 24,
							};
							weatherData.push(dayObject);
							start += 24;
						}
						props.onSaveWeatherData(weatherData);
					});
			});
	}

	return (
		<form onSubmit={submitHandler}>
			<Box sx={{ "& > :not(style)": { m: 1 } }}>
				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
					<SearchIcon sx={{ color: "primary.main", mr: 1, my: 0.5 }} />
					<TextField
						id="input-with-sx"
						label="Search City or Zipcode with Country"
						variant="standard"
						type="text"
						sx={{ width: "50%" }}
						onChange={locationChangeHandler}
						value={location}
					/>

					<Button variant="outlined" type="submit" sx={{ ml: 5 }}>
						Search
					</Button>
				</Box>
			</Box>
		</form>
	);
}

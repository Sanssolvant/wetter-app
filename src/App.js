import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchBar from "./Components/SearchBar";
import GridItem from "./Components/GridItem";

export default function App(props) {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [weatherData, setWeatherData] = useState("");

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					primary: {
						main: "#FFFFFF",
					},
					secondary: {
						main: "#0000FF",
					},
					mode: prefersDarkMode ? "dark" : "light",
				},
				typography: {
					h1: {
						fontSize: "3rem",
						fontWeight: 600,
					},
					h2: {
						fontSize: "1.75rem",
						fontWeight: 600,
					},
					h3: {
						fontSize: "1.5rem",
						fontWeight: 600,
					},
				},
			}),
		[prefersDarkMode]
	);

	const saveWeatherDataHandler = (receivedWeatherData) => {
		setWeatherData((prevExpenses) => {
			return [receivedWeatherData, ...prevExpenses];
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			<Container maxWidth="lg">
				<Typography variant="h1" sx={{ textAlign: "center", color: "primary.main", mt: 10, mb: 5 }}>
					Wetter-App
				</Typography>
				<SearchBar onSaveWeatherData={saveWeatherDataHandler} />
				<Grid container spacing={2} columns={7} sx={{ mt: 5 }}>
					<GridItem data={weatherData} />
					<GridItem data={weatherData} />
					<GridItem data={weatherData} />
					<GridItem data={weatherData} />
					<GridItem data={weatherData} />
					<GridItem data={weatherData} />
					<GridItem data={weatherData} />
				</Grid>
			</Container>
		</ThemeProvider>
	);
}

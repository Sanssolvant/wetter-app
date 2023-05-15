import { Grid } from "@mui/material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

export default function GridItem(props) {
	return (
		<Grid item xs={1}>
			<Box>
				<Card variant="outlined">
					<CardContent>
						<Box>
							<Typography variant="h3" sx={{ textAlign: "center", color: "primary.main" }}>
								{props.Day}
							</Typography>
						</Box>
						<Box
							sx={{
								textAlign: "center",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								width: "100%",
							}}
						>
							<AirIcon sx={{ color: "primary.main", mr: 1, my: 0.5 }} />
							<Typography variant="p" sx={{ textAlign: "center", color: "primary.main" }}>
								{props.Windspeed} km/h
							</Typography>
						</Box>
						<Box
							sx={{
								textAlign: "center",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								width: "100%",
							}}
						>
							<ThermostatIcon sx={{ color: "primary.main", mr: 1, my: 0.5 }} />
							<Typography variant="p" sx={{ textAlign: "center", color: "primary.main" }}>
								{props.AirTemperature} °C
							</Typography>
						</Box>
						<Box
							sx={{
								textAlign: "center",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								width: "100%",
							}}
						>
							<WaterDropIcon sx={{ color: "primary.main", mr: 1, my: 0.5 }} />
							<Typography variant="p" sx={{ textAlign: "center", color: "primary.main" }}>
								{props.Precipitation} mm/h
							</Typography>
						</Box>
						<Box sx={{ textAlign: "center", backgroundColor: "gray" }}>
							<Typography variant="p" sx={{ textAlign: "center", color: "primary.main" }}>
								{props.Date}
							</Typography>
						</Box>
					</CardContent>
				</Card>
			</Box>
		</Grid>
	);
}

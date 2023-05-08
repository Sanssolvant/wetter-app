import { Grid } from "@mui/material";
import { Box, Card, CardContent, Typography } from "@mui/material";

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
						<Box sx={{ textAlign: "center" }}>
							<Typography
								variant="p"
								sx={{ textAlign: "center", color: "primary.main", mt: 10, mb: 5 }}
							>
								{props.Windspeed} km/h
							</Typography>
						</Box>
						<Box sx={{ textAlign: "center" }}>
							<Typography
								variant="p"
								sx={{ textAlign: "center", color: "primary.main", mt: 10, mb: 5 }}
							>
								{props.AirTemperature} °C
							</Typography>
						</Box>
						<Box sx={{ textAlign: "center" }}>
							<Typography
								variant="p"
								sx={{ textAlign: "center", color: "primary.main", mt: 10, mb: 5 }}
							>
								{props.Precipitation} mm/h
							</Typography>
						</Box>
						<Box sx={{ textAlign: "center", backgroundColor: "gray" }}>
							<Typography
								variant="p"
								sx={{ textAlign: "center", color: "primary.main", mt: 10, mb: 5 }}
							>
								{props.Date}
							</Typography>
						</Box>
					</CardContent>
				</Card>
			</Box>
		</Grid>
	);
}

import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function InfoCards(props) {
	console.log(props);
	return (
		<Box>
			<Card variant="outlined">
				<CardContent>
					<Box sx={{ textAlign: "center" }}>
						<Typography
							variant="p"
							sx={{ textAlign: "center", color: "primary.main", mt: 10, mb: 5 }}
						>
							{/* {props.item[0].Windspeed} m/s */}
						</Typography>
					</Box>
					<Box sx={{ textAlign: "center" }}>
						<Typography
							variant="p"
							sx={{ textAlign: "center", color: "primary.main", mt: 10, mb: 5 }}
						>
							{/* {props.item[0].AirTemperature} °C */}
						</Typography>
					</Box>
					<Box sx={{ textAlign: "center" }}>
						<Typography
							variant="p"
							sx={{ textAlign: "center", color: "primary.main", mt: 10, mb: 5 }}
						>
							{/* {props.item[0].Precipitation} mm/h */}
						</Typography>
					</Box>
					<Box sx={{ textAlign: "center" }}>
						<Typography
							variant="p"
							sx={{ textAlign: "center", color: "primary.main", mt: 10, mb: 5 }}
						>
							{/* {props.item[0].Day} mm/h */}
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
}

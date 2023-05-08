import { Grid } from "@mui/material";
import InfoCards from "./InfoCards";

export default function GridItem(props) {
	return (
		<Grid item xs={1}>
			<InfoCards item={props.data} />
		</Grid>
	);
}

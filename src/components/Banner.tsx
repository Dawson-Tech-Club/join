import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React from "react";
// @ts-expect-error image does exist
import bannerImage from "../images/banner.png";

export function Banner() {
	return (
		<Card style={{ marginBottom: 20 }}>
			<CardMedia component="img" height="140" image={bannerImage} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					Dawson Tech Club
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Learn, explore and build cool things using all sort of technologies. Our main
					focus will be on programming, robotics and machine learning. Beginners are
					totally welcomed and encouraged to join.
				</Typography>
			</CardContent>

			{/* <CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions> */}
		</Card>
	);
}

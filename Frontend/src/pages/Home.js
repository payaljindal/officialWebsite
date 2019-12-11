/** @format */

import React, { Component } from "react";
import Nav from "../components/Nav";
import GoogleAssBg from "../assets/1200px-Google_Assistant_logo.svg.png";
import Logo from "../assets/unnamed.png";
import undrawAbout from "../assets/undraw_dev_productivity_umsq.svg";
import "./styles/Home.css";
import TeamPic from "../assets/undraw_team_spirit_hrr4.svg";
import ContactPic from "../assets/undraw_contact_us_15o2.svg";

export default class Home extends Component {
	render() {
		return (
			<div>
				<div
					style={{ position: "sticky", top: "0", background: "#f3f3f3", opacity: "0.7" }}>
					<Nav />
				</div>

				<div
					className="div1"
					style={{
						height: "100vh",
						overflow: "hidden",
					}}>
					<div>
						<img src={GoogleAssBg} style={styles.imgBg1}></img>
						<img src={Logo} style={styles.Logo}></img>
					</div>
					<div>
						<p style={styles.HomeText}>
							Thapar Institute of Engineering and Technology
						</p>
					</div>
				</div>
				<div style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
					<div style={styles.AboutTextContainer}>
						<h2 style={styles.AboutText}>
							At DSC TIET, our aim is to spread awareness and teach. Developers, come
							together under one roof to create a community which inspires thousands.
							Join Us!
						</h2>
					</div>
					<img src={GoogleAssBg} style={styles.imgBg2}></img>
					<img src={undrawAbout} style={styles.imgAboutUndraw}></img>
					<button style={styles.AboutButton1}>About us</button>
					<button style={styles.AboutButton2}>Join our Slack!</button>
				</div>

				<div
					style={{
						height: "100vh",
						width: "100%",
						overflow: "hidden",
						position: "relative",
						// background: "red",
						// display: "flex",
					}}>
					<div style={styles.TeamTextContainer}>
						<h2 style={styles.AboutText}>
							We have a strong <span style={{ fontWeight: "600" }}>team</span> filled
							with <span style={{ fontWeight: "600" }}>innovators</span> and people
							who want to make this{" "}
							<span style={{ fontWeight: "600" }}>world a better place</span>
						</h2>
					</div>
					<img src={TeamPic} style={styles.TeamImage}></img>
					<button style={styles.TeamButton}>Meet our Team</button>
				</div>

				<div style={{ height: "100vh" }}>GALLERY</div>
				<div
					style={{
						height: "100vh",
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
					}}>
					<h1 style={{ fontSize: "4.5em", fontWeight: "400", color: "#676C72" }}>
						Connect With Us!
					</h1>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "80%",
						}}>
						<form style={styles.Form} method="post">
							<ul style={styles.ul}>
								<li style={styles.li}>
									<input
										style={styles.input}
										type="text"
										id="name"
										name="user_name"
										placeholder="Name"
									/>
								</li>
								<li style={styles.li}>
									<input
										style={styles.input}
										type="email"
										id="mail"
										name="user_mail"
										placeholder="Email"
									/>
								</li>
								<li style={styles.li}>
									<textarea
										style={styles.textArea}
										id="msg"
										placeholder="Message"
										name="user_message"></textarea>
								</li>
							</ul>
							<button style={styles.FormButton}>Submit</button>
						</form>
						<img
							src={ContactPic}
							style={{ height: "65%", marginTop: "5%", height: "60%" }}></img>
					</div>
				</div>
			</div>
		);
	}
}

/** @format */

//STYLES
const styles = {
	imgBg1: {
		zIndex: "-100",
		position: "absolute",
		left: "-22vw",
		top: "-20vh",
		right: "5vw",
		bottom: "92vh",
		height: "115vh",
		// transform: "scale(0.75)",
		transform: "rotate(5deg)",
	},
	Logo: {
		height: "10vh",
		marginLeft: "40vw",
		marginTop: "18vw",
	},
	HomeText: {
		fontSize: "2em",
		fontWeight: "500",
		color: "#676C72",
		marginTop: "0",
		marginLeft: "50%",
	},
	imgBg2: {
		position: "absolute", //Absolute positioning(so that it doesnt get afffected by other lements) inside relative positioning, so that i can make it absolute to its parent without making it absolute to the whole page, that causes overflow
		margin: "0",
		zIndex: "-100",
		height: "70%",
		bottom: "20%",
		left: "83%",
		right: "25%",
		transform: "scaleX(-1) rotate(20deg)",
		// overflow: "hidden",
	},

	imgAboutUndraw: {
		position: "absolute", //Absolute positioning(so that it doesnt get afffected by other lements) inside relative positioning, so that i can make it absolute to its parent without making it absolute to the whole page, that causes overflow
		margin: "0",
		zIndex: "-100",
		height: "50%",
		bottom: "5%",
		left: "2%",
		right: "25%",
		transform: "",
		// overflow: "hidden",
	},

	AboutTextContainer: {
		width: "50%",
		marginLeft: "35%",
		marginTop: "15%",
	},
	AboutText: {
		fontSize: "1.9em",
		color: "#676C72",
		fontWeight: "400",
	},

	AboutButton1: {
		position: "relative",
		marginLeft: "35%",
		borderStyle: "solid",
		borderWidth: "2px",
		padding: "20px 30px 20px 30px",
		color: "#f3f3f3",
		fontSize: "1.5em",
		background: "#EA4335",
		borderRadius: "1em",
		cursor: "pointer",
	},
	TeamButton: {
		position: "absolute",
		left: 0,
		marginLeft: "5%",
		marginTop: "0",
		borderStyle: "solid",
		borderWidth: "2px",
		padding: "20px 30px 20px 30px",
		color: "#f3f3f3",
		fontSize: "1.5em",
		background: "#FBBC05",
		borderRadius: "1em",
		cursor: "pointer",
	},
	AboutButton2: {
		position: "relative",
		marginLeft: "1em",
		borderStyle: "solid",
		borderColor: "#EA4335",
		borderWidth: "2px",
		padding: "20px 30px 20px 30px",
		color: "#EA4335",
		fontSize: "1.5em",
		background: "#f3f3f3",
		borderRadius: "1em",
		cursor: "pointer",
	},
	TeamTextContainer: {
		width: "30%",
		marginTop: "15%",
		marginLeft: "5%",
	},
	TeamImage: {
		position: "absolute",
		top: "10%",
		height: "70%",
		marginLeft: "50%",
		zIndex: "-100",
	},
	Form: {
		height: "90%",
		// background: "red",
		// marginTop: "5%",
		width: "100%",
		position: "relative",
		// padding: "1em",
		// border: "1px solid #CCC",
		// borderRadius: "1em",
	},
	li: {
		// background: "yellow",
		listStyle: "none",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		padding: "1em",
		// margin: "1em",
		marginLeft: "0",
		marginBottom: "0",
	},
	input: {
		background: "#f3f3f3",
		width: "80%",
		fontSize: "1.2em",
		fontFamily: "Poppins",
		border: "none",
		borderBottomStyle: "solid",
		borderBottomWidth: "0.1em",
		borderBottomColor: "#676C72",
		padding: "1em 0 0.5em 0em",
		margin: "0.5em",
		color: "black",
		marginBottom: "0",
	},
	textArea: {
		background: "#f3f3f3",
		width: "80%",
		fontFamily: "Poppins",
		fontSize: "1.2em",
		border: "none",
		borderBottomStyle: "solid",
		borderBottomWidth: "0.1em",
		borderBottomColor: "#676C72",
		padding: "1em 0 0.5em 0em",
		margin: "0.5em",
		color: "black",
		marginBottom: "0",
		verticalAlign: "top",
		height: "10em",
	},
	label: {
		background: "pink",
		fontSize: "1.2em",
	},
	ul: {
		display: "flex",
		flexDirection: "column",
		// justifyContent: "space-between",
		height: "100%",
		margin: "1em",
		// background: "grey",
		padding: "1em",
	},
	FormButton: {
		position: "absolute",
		marginLeft: "2em",
		bottom: "0",
		// marginLeft: "5%",
		borderStyle: "solid",
		borderWidth: "2px",
		padding: "15px 25px 15px 25px",
		color: "#f3f3f3",
		fontSize: "1.5em",
		background: "#34A853",
		borderRadius: "1em",
		cursor: "pointer",
	},
};

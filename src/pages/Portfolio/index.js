import React from "react";
import PortCard from "../../components/PortCard/index";
import downstreamPic from '../../images/downstream.png'
import easicuisiPic from '../../images/EasiCuisi.png'
import weatherPic from '../../images/weather.png'
import latitudePic from '../../images/latitudelongitude.png'
import employeePic from '../../images/CLI.png'
import roshambo from '../../images/bg-loot.png'
///material ui///
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const portLinks = [
    {
        "name": "Simple [Weather | Maps | Data]",
        "GitHub_Link": "https://github.com/mnorthup2207/WeatherMapsData",
        "Url": "https://latitudelongitude.herokuapp.com/",
        "description": "A proof of concept for utilizing the Open Weather API, Random API, and Mapbox to create a full MERN stack web application",
        "portfolioImage": latitudePic,
        "heading1": "Summary of Project",
        "para1": "A proof of concept for utilizing the Open Weather API, the ANU Quantum Random Numbers Server, and Mapbox to create a Full Stack MERN application in REACT. The application first loads to a blank map and a dropdown down menu. From there the user can select their desired amount of coordinates randomly returned from Quantum. After returning the API call MapBox-GL plots the resulting coordinates. THe user can then click a map pin and a modal will display the pins latitude, longitude and several weather data points. User can then save the item to the backend MongoDB database or simply click another. From that point the user can click the Saved Points link which will then load the the saved items from the database. User can decide to delete data as choosing",
        "heading2": "Dependencies and Major Technologies Used",
        "para2": "REACT JS - REACT client facing Framework, MongoDB - Database storage frame, Mongoose - MongoDB object modeling for node.js, Material UI - CSS Framework within REACT, ANU Quantum Random Numbers Server - Random number API, Mapbox-GL JS - MapBox API, MomentJS - Moment Js timestamp converter",
    },
    {
        "name": "DownStream",
        "GitHub_Link": "https://github.com/mnorthup2207/project2",
        "Url": "https://calm-wildwood-28573.herokuapp.com/",
        "description": "Better Documents. Better Messaging. A document retention and messaging app, utilizing AWS S3, Passport Authentication, and MySQL",
        "portfolioImage": downstreamPic,
        "heading1": "Summary of Project",
        "para1": "Downstream is a perfect application for any organization looking to communicate through a messaging service that also provides document retention. Downstream provides active messaging (Streams) via one to one users or even group messaging functionality. Downstream also provides a place to upload and store organizational important documents.",
        "heading2": "User Profiles",
        "para2": "Downstream's ideal user would be a Doctor messaging their patients, and a patient messaging back their doctor. This will provide real time messaging between Doctors and Patients as well as providing a place to upload and download patient files, test results, and even billing statements. An additional Downstream user would be a school teacher to students patients group. Operating much like the above user profile, the teacher could message the student's parents in a group or one on one. The teacher could also upload documents such as; report cards, permission slips, and parent teacher information.",
        "heading3": "Dependencies and Major Technologies Used",
        "para3": "Using AWS S3 for document (raft storage); Passport Authentication, Passport authenticates the login, create user, and keeps non users from accessing further routes. DropZone.JS DropZone handles our upload functionality to S3 Other Dependencies, Express, Path, Express-Session"
    },
    {
        "name": "EasiCuisi",
        "GitHub_Link": "https://github.com/mnorthup2207/EasiCuisi_recipe_API",
        "Url": "https://mnorthup2207.github.io/EasiCuisi_recipe_API/",
        "description": "Ever been at home ready to make a meal but don't know where to start? Look no further! Search EasiCuisi's library of over 100,000 recipes!",
        "portfolioImage": easicuisiPic,
        "heading1": "Summary of Project",
        "para1": "Upon opening of page, you will see a search box on the left side of the page with three dropdown selectors for the type of protein, serving size, cook time and calorie count desired. After filling out these dropdowns, photos will appear on the page that match the criteria selected by the user. The name of each recipe will appear below the photo it and when the user clicks on the name, a modal with three tabs (ingredients, nutrition and preparation) and will be able to walk the user through how to make the selected dish."
    },
    {
        "name": "Weather Forecasting App",
        "GitHub_Link": "https://github.com/mnorthup2207/Five_Day_Weather_API",
        "Url": "https://mnorthup2207.github.io/Five_Day_Weather_API/",
        "description": "Planning a trip and need a detailed 5 day forecast of several cities? Use this app to stay prepared!",
        "portfolioImage": weatherPic,
        "heading1": "Summary of Project",
        "para1": "The webpage is divided into two main containers. The top left most section contains a search box that submits with a an enter, or a button click. After typing a city name, and pressing enter or clicking the submit button, a button with that name will append to the bottom of the button div. After selecting any city button, to the right the current weather and a five day forecast will appear.",
        "heading2": "User Profile",
        "para2": "The intended use for this project is for someone perhaps traveling or keeping up with traveling family needing to keep up with several locations weather and its forecast."
    },
    {
        "name": "Employee Tracking CMS",
        "GitHub_Link": "https://github.com/mnorthup2207/Employee_Tracking_CMS",
        "Url": "https://github.com/mnorthup2207/Employee_Tracking_CMS",
        "description": "A command line employee tracking application built on a MySQL database",
        "portfolioImage": employeePic,
        "heading1": "Summary of Project",
        "para1": "This Employee Tracking CLI app uses a MySQL database and communicates with the client through the Inquirer NPM. This application makes a CRUD (creating, read, update, and delete) functional app. The application allows you to enter new employees, update roles, delete employees, and view all current employees, managers, and departments.",
        "heading2": "Intended Use",
        "para2": "This application is created with the small to moderate sized company, looking for a light weight framework for their HR database. Easily update, view, and manage all employees from one command line application.",
        "heading3": "Dependencies and Major Technologies Used",
        "para3": "MySQL, Inquirer, Express, and NodeJS"
    },
    {
        "name": "Ro-Sham-Bo",
        "GitHub_Link": "https://github.com/mnorthup2207/project3",
        "Url": "https://infinite-earth-38608.herokuapp.com/",
        "description": "Ro-Sham-Bo is a single player vs computer game that plays on a rock paper scissors theme.",
        "portfolioImage": roshambo,
        "heading1": "Summary of Project",
        "para1": "Summary coming soon, under construction"
    }
];

const row1 = [portLinks[0], portLinks[1]]
const row2 = [portLinks[2], portLinks[3]]
const row3 = [portLinks[4], portLinks[5]]
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

const Portfolio = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="space-around" spacing={3}>
                {row1.map(link => (
                    <Grid item key={link.name} xs>
                        <PortCard props={link} />
                    </Grid>
                ))};
            </Grid>
            <Grid container justify="space-around" spacing={3}>
                {row2.map(link => (
                    <Grid item key={link.name} xs>
                        <PortCard props={link} />
                    </Grid>
                ))};
            </Grid>
            <Grid container justify="space-around" spacing={3}>
                {row3.map(link => (
                    <Grid item key={link.name} xs>
                        <PortCard props={link} />
                    </Grid>
                ))};
            </Grid>
        </div >
    );
};

export default Portfolio;
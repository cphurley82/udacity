/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio =  {
 	"name": "Chris Hurley",
 	"role": "Web Developer",
 	"contacts": {
 		"email": "cphurley82@gmail.com",
 		"mobile": "555-555-5555",
 		"github": "cphurley82",
 		"twitter": "@cphurley82",
 		"location": "Rocklin"
 	},
 	"bioPic": "images/chris.jpg",
 	"welcomeMessage": "Hello!",
 	"skills": ["C++", "SSDs", "NVM", "CPQ", "BML", "Python", "Ruby", "HTML",
 		"CSS", "JavaScript"
 	]
 };

var work = {
	"jobs": [{
		"title": "Software Engineer",
		"employer": "Oracle",
		"dates": "July 2016 - Present",
		"description": "Develop web applicaiton used by sales to configure and price Oracle 's cloud products, software, and hardware."
	}, {
		"title": "Software Engineer",
		"employer": "Intel",
		"dates": "2008 - 2016",
		"description": "Developed software tools to enable architecture, design, and manufacturing of Non-Volatile Memory prodcuts."
	}]

};

var education = {
	"schools": [{
		"name": "UC Davis",
		"city": "Davis, CA, US",
		"degree": "BS",
		"majors": ["Computer Engineering"],
		"dates": 2009,
		"url": "http://www.ucdavis.edu"
	}, {
		"name": "American River College",
		"city": "Sacramento, CA, US",
		"degree": "AA",
		"major": ["Computer Science"],
		"dates": 2006,
		"url": "http://arc.losrios.edu"
	}],
	"onlineCourses": [{
		"title": "Web Development",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/web-development--cs253"
	}]
};

var projects = {
	"projects": [{
		"title": "Drafting With Friends",
		"dates": "2015",
		"description": "Built web based application to play a concurent, multiplayer, card drafting game.",
		"url": "https://github.com/cphurley82/drafting-with-friends"
	}]
};

if (bio.skills && bio.skills[0]) {
	
}
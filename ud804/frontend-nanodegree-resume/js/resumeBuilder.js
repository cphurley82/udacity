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
 		"location": "Rocklin, CA",
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
		"description": "Develop web applicaiton used by sales to configure and price Oracle 's cloud products, software, and hardware.",
		"location": "Rocklin, CA"
	}, {
		"title": "Software Engineer",
		"employer": "Intel",
		"dates": "2008 - 2016",
		"description": "Developed software tools to enable architecture, design, and manufacturing of Non-Volatile Memory prodcuts.",
		"location": "Folsom, CA",
	}]

};

var education = {
	"schools": [{
		"name": "UC Davis",
		"location": "Davis, CA, US",
		"degree": "BS",
		"majors": ["Computer Engineering"],
		"dates": 2009,
		"url": "http://www.ucdavis.edu"
	}, {
		"name": "American River College",
		"location": "Sacramento, CA, US",
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
		"url": "https://github.com/cphurley82/drafting-with-friends",
		"image": "images/197x148.gif",
	}]
};

$('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
$('#header').prepend(HTMLheaderName.replace("%data%", bio.name));

for (contact_type in bio.contacts) {
	var formattedContact = HTMLcontactGeneric.replace("%contact%", 
			contact_type);
	formattedContact = formattedContact.replace("%data%", 
			bio.contacts[contact_type]);
	$('#topContacts').append(formattedContact);
}

$('#header').append(HTMLbioPic.replace("%data%", bio.bioPic));

if (bio.skills && bio.skills[0]) {
	$('#header').append(HTMLskillsStart);
	for (var skillNum in bio.skills) {
		formattedSkills = HTMLskills.replace("%data%", bio.skills[skillNum])	
		$('#skills').append(formattedSkills);	
	}
}

function displayWork() {
	if (work.jobs && work.jobs[0]) {
		for (var index in work.jobs) {
			$('#workExperience').append(HTMLworkStart);
			
			var formattedEmployerTitle = 
					HTMLworkEmployer.replace("%data%", work.jobs[index].employer) 
					+ HTMLworkTitle.replace("%data%", work.jobs[index].title);	
			$('.work-entry:last').append(formattedEmployerTitle);		

			$('.work-entry:last').append(
					HTMLworkDates.replace("%data%", work.jobs[index].dates));
			$('.work-entry:last').append(
					HTMLworkDescription.replace("%data%",	work.jobs[index].description));	

		}
	}
}

displayWork();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

$('#main').append(internationalizeButton);

function inName(fullName) {
	names = fullName.trim().split(" ");
	names[0] = names[0].charAt(0).toUpperCase() + names[0].slice(1);
	names[names.length-1] = names[names.length-1].toUpperCase();
	interFullName = "";
	for (nameIdx in names) {
		if(nameIdx == 0) {
			interFullName += names[nameIdx];
		} else {
			interFullName += " " + names[nameIdx];
		}
	}
	return interFullName;
}

projects.display = function() {
	
	for (project_index in this.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", 
				this.projects[project_index].title).replace("#", 
				this.projects[project_index].url));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", 
				this.projects[project_index].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", 
				this.projects[project_index].description));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%", 
				this.projects[project_index].image));
						
	}
}

projects.display();

$("#mapDiv").append(googleMap);
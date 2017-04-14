var bio = {
    "name": "Austin Gregersen",
    "role": "Web Developer and Marketer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "austin@example.com",
        "twitter": "@JohnDoe",
        "github": "abgregs",
        "location": "Denver"
    },
    "welcomeMessage": "Welcome to my online resume.",
    "skillsStart": "Skills at a Glance",
    "skills": ["web development", "medical devices", "analytics", "digital marketing"],
    "biopic": "images/austin.jpg"
};

var education = {
    "schools": [{
        "name": "University of Arizona",
        "location": "Tucson, AZ",
        "degree": "BA",
        "majors": ["East Asian Studies, Linguistics and Japanese Literature", "Mathematics"],
        "dates": "2009",
        "url": "http://www.arizona.edu"
    }, ],
    "onlineCourses": [{
            "title": "Udacity Online Classes and Nanodegrees",
            "school": "Front-End Web Developer Nanodegree",
            "dates": "2016",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "Udacity Online Classes and Nanodegrees",
            "school": "Intro to Computer Science Class",
            "dates": "2011",
            "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
        }
    ]
};

var work = {
    "jobs": [{
            "employer": "Terumo BCT",
            "title": "Product Manager Cell Processing",
            "location": "Lakewood, CO",
            "dates": "March 2013 - Present",
            "description": "Works closely with the sales organization and marketing managers to successfully identify business opportunities, support tools, and new marketing programs in a timely and high quality manner. Evaluates communication and documentation programs and support tools for effectiveness through customer and sales force feedback as well as objective research. Maintains a close working relationship with various departments of the company to develop a fluid exchange of planning, forecasting, and marketing information with other functions.",
            "url": "https://www.terumobct.com"
        },
        {
            "employer": "iAcquire",
            "title": "PR Coordinator",
            "location": "Phoenix, AZ",
            "dates": "December 2011 - March 2013",
            "description": "Use our iRank research, relationship management, and analytics platform to identify high-quality relevant publishers. Reports key data points (contact attempts/exchanges, stages of prospect interaction, etc.), and manage outreach and ongoing communication with publishers. Evaluates and coordinates strategic web partnership opportunities for clients.",
            "url": "https://www.iacquire.com"
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Udacity Portfolio Website",
            "dates": "2016",
            "description": "The goal of this project was to build a simple online portfolio and to demonstrate an understanding of responsive design using Bootstrap framework. The project covered some of the following topics: HTML5 semantic tags, Bootstrap/grid-based layout, CSS media queries, responsive images.",
            "url": "https://abgregs.github.io/frontend-nanodegree-portfolio-project/",
            "images": ["images/udacity-portfolio-project.PNG"]
        },
        {
            "title": "Clinical Trial Data Visualization",
            "dates": "2014",
            "description": "This project started out of the need for easier ways to sort and view cell therapy clinical trial data. Each bubble represents a clinical trial listed on clinicaltrials.gov. Hovering over the bubble provides important information about that trial. If you click the bubble you are directed to the clinicaltrials.gov website to view a detailed description of the trial. I developed the concept for this project and designed an early version of the tool, then collaborated with a web developers to complete the project.",
            "url": "https://www.terumobct.com/Pages/Cell%20Therapy%20Technologies/Clinical-Trial-Data-Visualization/MSC-IF.html",
            "images": ["images/clinical-trial-viz-tool.PNG"]
        },
        {
            "title": "Udacity Arcade Game Project",
            "dates": "2017",
            "description": 'In this project I created a frogger-like arcade game using HTML5 canvas and object-oriented javascript principles. The lessons emphasized in this project include: scope and variable access, the "this" parameter, functional classes, prototypical classes, superclass and subclasses, HTML5 canvas. The game required creating classes and prototype functions for different elements of the game, namely the player and the enemies. Functions were created to ensure the enemies move in a natural way across the screen and that collisions between the enemies and the player happen logically. The project included writing a README file. Beyond meeting the requirements for the project, a gem class was implemented and a scoreboard was also added to the game.',
            "url": "https://abgregs.github.io/frontend-nanodegree-arcade-game-project/",
            "images": ["images/udacity-arcade-game-project.PNG"]
        }
    ]
};

//track clicks

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);

});


//internationalizeButton

// function inName(name) {
//   name = name.trim().split(" ");
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//   return name[0] + " " + name[1];
//
// }
//
// $("#main").append(internationalizeButton);

//bio

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedSkillsStart = HTMLskillsStart.replace("%data%", bio.skillsStart);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic, formattedWelcomeMessage, formattedSkillsStart);

    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
};


bio.display();

//education

education.display = function() {

    education.schools.forEach(function(school) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        formattedSchoolName = formattedSchoolName.replace("%url%", school.url);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation);

        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);

        });

    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourse) {

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        formattedonlineSchool = formattedonlineSchool.replace("%url%", onlineCourse.url);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedonlineTitle, formattedonlineSchool, formattedonlineDates);

    });

};

education.display();


//work

work.display = function() {

    for (var i = 0; i < work.jobs.length; i++) {

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        formattedWorkEmployerTitle = formattedWorkEmployerTitle.replace("%url%", work.jobs[i].url);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedWorkEmployerTitle, formattedWorkLocation, formattedWorkDates, formattedWorkDescription);

    }
};

work.display();

//projects

projects.display = function() {

    projects.projects.forEach(function(project) {
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
        formattedprojectTitle = formattedprojectTitle.replace("%url%", project.url);

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription);

        project.images.forEach(function(image) {
            var formattedprojectImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedprojectImage);

        });
    });
};

projects.display();

//add Google map

$("#mapDiv").append(googleMap);

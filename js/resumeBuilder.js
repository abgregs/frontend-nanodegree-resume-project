var bio = {
    "name": "Austin Gregersen",
    "role": "Web Developer and Marketer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "abgregs@gmail.com",
        "github": "/abgregs",
        "angellist": "/austin-gregersen",
        "linkedin": "/austin-gregersen-a4b77440/",
        "location": "Denver"
    },
    "welcomeMessage": "Welcome to my online resume.",
    "bioHeader": "Biography",
    "skillsStart": "Skills at a Glance",
    "skills": "React JS, Redux, Javascript, CSS, SASS/SCSS, HTML, Firebase, GitHub, Google Maps Javascript API, Eloqua, Marketo, SFDC, Photoshop, Google Analytics, Value Proposition and Messaging, Digital Marketing Strategy, Long-Term Strategic Business Planning",
    "summary": "Collaborative partner with experience creatively solving business challenges to meet or exceed challenging revenue goals and performance measures in both start-ups and large organizations. Analytically driven thinker complemented with excellent communication and interpersonal skills.",
    "biopic": "images/austin.jpg"
};

var education = {
    "schools": [{
        "name": "University of Arizona",
        "location": "Tucson, AZ",
        "degree": "BA",
        "majors": ["East Asian Studies, Linguistics and Japanese Literature"],
        "dates": "2009",
        "url": "http://www.arizona.edu"
    }, ],
    "onlineCourses": [{
            "title": "Udacity Online Classes and Nanodegrees",
            "school": "Front-End Web Developer Nanodegree",
            "dates": "2017",
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
            "dates": "March 2013 - May 2017",
            "description": "Led the launch of two websites and global communication strategy for several products in both the point of care cell processing and regenerative medicine markets. Achieved over 100% YoY sales growth and over 350% increase in prospects generated online. Developed and implemented a marketing automation solution to track digital behavior, generate prospects, program email campaigns, and distribute and manage leads. Responsible for hiring, training, and managing a digital marketing specialist role.",
            "url": "https://www.terumobct.com"
        },
        {
            "employer": "iAcquire",
            "title": "PR Coordinator",
            "location": "Phoenix, AZ",
            "dates": "December 2011 - March 2013",
            "description": "Developed content marketing and SEO strategies for Fortune 1000 companies as well as small businesses. Built and managed relationships with various online publishers to coordinate development and placement of articles, infographics, and other content. Received specific praise for having a keen business acumen, attention to detail, and ability to learn and synthesize new information quickly.",
            "url": "https://www.iacquire.com"
        }
    ]
};

var projects = {
    "projects": [{
          "title": "Luhu Design Website",
          "dates": "2017",
          "description": "Designed and built a website for a local mechanical engineering and design firm using React and Bootstrap. Composed functions in React to perform form validation, toggle classes, manage scroll position, handle click events and more to implement features such as a sticky navigation and a simple contact form. Gained more familiarity with the React ecosystem and associated tools including: React Router 4, Webpack, Babel, ES6, React Helmet, SASS/SCSS. Used nested routes and <i>props.match.params</i> to control routing for blog and services components. Composed a blog component that manages category tagging and updates when new posts/categories are added.",
          "url": "https://luhu-design-project.firebaseapp.com/",
          "images": ["images/luhu-design-project-screenshot.jpg"]
        },
        {
          "title": "Duckr App",
          "dates": "2017",
          "description": "Learned to create an app similar to Twitter built using Redux and React. This project covered several advanced topics in Redux and React using a real world example application. The Ducks Redux file structure was used to organize actions/action creators and reducers. Redux Thunk middleware was used to control dispatching actions over the lifecycle of asynchronous events for fetching and handling things like users, likes, and replies in the various views of the app. Other topics covered include: user authentication with Facebook and Firebase, route protection, error handling, data structures, component based architecture and more.",
          "url": "https://duckr-teapp.firebaseapp.com/",
          "images": ["images/duckr-app.jpg"]
        },
        {
          "title": "GitHub Battle App",
          "dates": "2017",
          "description": "Learned the fundamentals of React by creating a GitHub Battle app. The purpose and main benefits of React (namely managing state throughout your application) were emphasized in building out the various components of this app. This project familiarized me with the React ecosystem and associated tools including: React Router, Webpack, Babel, Axios, NPM. Some topics covered when building this project included: dataflow with props, function composition in React, nesting components, life cycle events, forms and encapsulation, dynamic rendering and query parameters. This project also familiarized me with building for production and setting up hosting with Firebase. The app itself fetches profile and repo information from the GitHub API to either display a grid of the most popular repos in a selected language or to compare the ranking of any two GitHub users based on number of stars and followers.",
          "url": "https://github-battle-cff2f.firebaseapp.com/",
          "images": ["images/github-battle-project.PNG"]
        },
        {
          "title": 'Udacity Neighborhood Map',
          "dates": "2017",
          "description": "Used the Google Maps Javascript API and Foursquare API to create a neighborhood map providing information about local areas of interest. Implemented declarative bindings and automatic UI refresh using Knockout JS. Added a live search that filters on both text input and category selection, updating both the map markers and the list of places based on various user input.",
          "url": "https://abgregs.github.io/frontend-nanodegree-neighborhood-map-project/",
          "images": ["images/neighborhood-map-project.PNG"]
        },
        {
          "title": "Clinical Trial Data Visualization",
          "dates": "2014",
          "description": "Taught myself how to use D3.js to build a basic model for an interactive clinical trial data visualization project, focusing on trends for key cell types that have attracted investment in the cell therapy industry. The visualization provides a comprehensive view of cell therapy clinical trials and the ability to sort the trials based on information collected from the trial description on the clinicaltrials.gov website.",
          "url": "https://www.terumobct.com/Pages/Cell%20Therapy%20Technologies/Clinical-Trial-Data-Visualization/MSC-IF.html",
          "images": ["images/clinical-trial-viz-tool.PNG"]
        },
        {
          "title": "Harvest Technologies Website",
          "dates": "2016",
          "description": "Directed a team of more than 10 people, leveraging expertise from various cross-functional partners including sales, marketing, regulatory affairs, and clinical specialists to define and execute the strategy for rapidly launching the website. Redefined value proposition, developed all content and messaging, and led global communication strategy. Created our first and only content intended for patients, including a highly successful Find a Doctor program. Integrated marketing automation workflows and identified new opportunities for generating prospects.",
          "url": "https://www.harvesttech.com/",
          "images": ["images/harvest-website-project.png"]

        },
        {
          "title": "Udacity Sample Portfolio Website",
          "dates": "2016",
          "description": "The goal of this project was to build a sample online portfolio and to demonstrate an understanding of responsive design using Bootstrap framework. The project covered some of the following topics: HTML5 semantic tags, Bootstrap/grid-based layout, CSS media queries, responsive images.",
          "url": "https://abgregs.github.io/frontend-nanodegree-portfolio-project/",
          "images": ["images/udacity-portfolio-project.PNG"]

        },
        {
          "title": "Udacity Arcade Game Project",
          "dates": "2017",
          "description": 'Created a frogger-like arcade game using HTML5 canvas and object-oriented javascript principles. Created functions to ensure the enemies move in a natural way across the screen and that collisions between the enemies and the player happen logically. Beyond meeting the requirements for the project, a gem class was implemented and a scoreboard was also added to the game. The lessons emphasized in this project included: scope and variable access, the "this" parameter, functional classes, prototypical classes, superclass and subclasses, HTML5 canvas.',
          "url": "https://abgregs.github.io/frontend-nanodegree-arcade-game-project/",
          "images": ["images/udacity-arcade-game-project.PNG"]
        }
    ]
};

// Track clicks

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);

});

// Displays the bio data stored above by replacing the placeholders in helper.js

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    var formattedAngelList = HTMLangellist.replace("%data%", bio.contacts.angellist);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBioHeader = HTMLbioHeader.replace("%data%", bio.bioHeader);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedSummary = HTMLsummary.replace("%data%", bio.summary);
    var formattedSkillsStart = HTMLskillsStart.replace("%data%", bio.skillsStart);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioHeader, formattedSummary);
    $("#header").append(formattedSkillsStart, formattedSkills);

    $("#topContacts, #footerContacts").append(formattedEmail, formattedGithub, formattedAngelList, formattedLinkedIn, formattedLocation);

};


bio.display();

// Displays the education data stored above by replacing the placeholders in helper.js

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
        formattedonlineTitle = formattedonlineTitle.replace("%url%", onlineCourse.url);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedonlineTitle, formattedonlineSchool, formattedonlineDates);

    });

};

education.display();


// Displays the work data stored above by replacing the placeholders in helper.js

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

// Displays the poroject data stored above by replacing the placeholders in helper.js

projects.display = function() {

    projects.projects.forEach(function(project) {
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("%url%", project.url);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);


        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription);

        project.images.forEach(function(image) {

            var formattedprojectImage = HTMLprojectImage.replace("%data%", image).replace("%url%", project.url);
            $(".project-entry:last").append(formattedprojectImage);

        });
    });
};

projects.display();

// Add Google map

$("#mapDiv").append(googleMap);

var bio = {
    "name": "Alan Kantserov",
    "role": "Web Developer",
    "contacts": {
        "phone": "+1(914)525-3158",
        "email": "alankant2030@gmail.com",
        "twitter": "my_twitter",
        "github": "alan-kantserov",
        "location": "New-York"
    },
    "skills": ["HTML", "CSS", "JavaScript"],
    "welcomeMessage": "Hi everybody!",
    "picture": "https://pp.vk.me/c311616/v311616671/3cc1/57VxlWZLjuA.jpg"
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data", bio.picture);

    $("#header").append(formattedName)
        .append(formattedRole)
        .append(formattedPic);

    $("#header").append(HTMLcontactStart);
    $("footerContacts").append(HTMLcontactStart);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    $("#contacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation)
        .append(formattedTwitter);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation)
        .append(formattedTwitter);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

var education = {
    "online_courses": [{
        "school": "Codecademy",
        "username": "alan__k",
        "courses": ["HTML", "CSS", "JavaScript", "jQuery"],
        "profile": "https://www.codecademy.com/alan__k"
    }, {
        "school": "Teamtreehouse",
        "username": "alankantserov",
        "courses": ["HTML", "CSS", "JavaScript", "Ruby"],
        "profile": "https://teamtreehouse.com/alankantserov"
    }],
    "schools": [{
        "name": "Nazarbayev Intellectual School (NIS)",
        "type": "High School",
        "location": "Kazakhstan, Semey",
        "dates": "2005-2014",
        "link": "http://nis.edu.kz/en/"
    }, {
        "name": "Education First (EF)",
        "type": "High School",
        "location": "United States, Thornwood",
        "dates": "2014-2017",
        "link": "http://ef.com/"
    }]
};

education.display = function () {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].type);
        $(".education-entry:last").append(formattedDegree);
        var formattedDates = HTMLworkDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
    }

    $("#education").append(HTMLonlineClasses);

    for (var course in education.online_courses) {
        $("#education").append(HTMLclassesStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.online_courses[course].courses.join(", "));
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.online_courses[course].school);
        var formattedUsername = HTMLuserName.replace("%data%", education.online_courses[course].username);
        $(".classes:last").append(formattedTitle)
            .append(formattedSchool)
            .append(formattedUsername);
    }
};

education.display();

var work = {
    "jobs": [{
        "position": "Student",
        "employer": "EF Academy",
        "location": "New-York",
        "responsibilites": "I study in the U.S. Currently I am in 11th grade of International Baccalaureate(IB) program.",
        "dates_worked": "2004-2016"
    }, {
        "position": "Freelancer",
        "employer": "",
        "location": "",
        "responsibilites": "Freelancing requires to do stuff that consumers pay for. Later, I will work as a freelancer in my country.",
        "dates_worked": ""
    }]
};

work.display = function () {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        if (work.jobs[job].employer.length > 1 || work.jobs[job].position.length > 1) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
        } else {
            $(".work-entry:last").append(EmployerTitle);
        }

        if (work.jobs[job].dates_worked.length > 1) {
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates_worked);
            $(".work-entry:last").append(formattedDates);
        }
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].responsibilites);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

function locationizer(work) {
    locations = [];
    for (var job in work.jobs) {
        var newLocations = work.jobs[job].location;
        locations.push(newLocations);
    }
    return locations;
}

var projects = {
    "projects": [{
        "title": "Portfolio Site",
        "description": "This is a first project of my Udacity Nanodegree. I created Portfolio for myself where I input some information about myself as a developer.",
        "image": ["/images/Portfolio.jpg"]
    }, {
        "title": "Online resume",
        "description": "Actually, this website is my second project of my Udacity Nanodegree. I created a resume webpage, where I put all the information about myself.",
        "image": "",
    }, {
        "title": "Arcade game",
        "description": "This is a third project of my Udacity Nanodegree. I created a simple 2D game, which will update and add new, cool features later.",
        "image": ["/images/Arcade-game.jpg"]
    }]
};

projects.display = function () {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
        $(".project-entry:last").append(formattedImage);
    }
};

$("#projects").append(projects.display);

$("#mapDiv").append(googleMap);
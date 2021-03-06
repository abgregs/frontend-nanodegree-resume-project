/*
This file contains all of the code running in the background that makes resumeBuilder.js possible
*/

var HTMLheaderName = '<h1 id="name" class="orange-text">%data%</h1><br style="clear: both;">';
var HTMLheaderRole = '<span id="role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span>%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span><a target="_blank" class="anchor-dark" href="mailto:abgregs@gmail.com">%data%</a></span></li>';
var HTMLinstagram = '<li class="flex-item"><span class="orange-text">instagram</span><span><a target="_blank" class="anchor-dark" href="http://www.instagram.com/austin.gregersen/">%data%</a></span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span><a target="_blank" class="anchor-dark" href="http://www.github.com/abgregs/">%data%</a></span></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="orange-text">linkedin</span><span><a target="_blank" class="anchor-dark" href="https://www.linkedin.com/in/austin-gregersen-a4b77440/">%data%</a></span></li>';
var HTMLangellist = '<li class="flex-item"><span class="orange-text">angel list</span><span><a target="_blank" class="anchor-dark" href="https://angel.co/austin-gregersen?public_profile=1">%data%</a></span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span>%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span>%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h2 id="skills-h2">%data%</h2>';
var HTMLskills = '<p id="skills">%data%</p>';

var HTMLbioHeader = '<h2 id="bio-h2">%data%</h2>';
var HTMLsummary = '<p id="summary">%data%</p>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a target="_blank" href="%url%">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a target="_blank" href="%url%">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div></div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<a target="_blank" href="%url%"><img src="%data%"></a>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a target="_blank" href="%url%">%data%</a>';
var HTMLschoolDegree = ' -- %data%';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a target="_blank" href="%url%">%data%</a>';
var HTMLonlineSchool = ' -- %data%';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="%url%">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The next few lines were related to a quiz about an Internationalize Button in the lesson Flow Control
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks were for a Click Locations quiz in the lesson Flow Control
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {

});


var map;


function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array.
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array.
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  */
  function createMapMarker(placeData) {

    // Saves location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window


    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });


    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);

    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});

// map variable, set coordinates and zoom level
    var mymap = L.map('mapid', {
        minZoom: 4.5,
        zoomSnap: 0.25 
    });
  mymap.setView([39.069150, -95.665372], 4.5);

  var southWest = L.latLng(22.950570, -124.936219),
    northEast = L.latLng(55.100042, -50.414233);
  var bounds = L.latLngBounds(southWest, northEast);

  mymap.setMaxBounds(bounds);

 // add tile layer 

    
    L.tileLayer.provider('Thunderforest.Pioneer', {
        apikey: '6573f45fe2524029aa0578341b94f6eb',
        maxZoom: 6,
        attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);


//JOHNNY APPLESEED (done)

  var appleseedIcon = L.icon({
    //set path to icon
    iconUrl: 'icons/appleseed.png',
    // size of the icon
    iconSize: [90, 67]
  });

 var appleseedPop = '<p>Johnny Appleseed</p> <img src="images/gropper-appleseed.jpg" alt="Johnny Appleseed" width="60px">';

    L.marker([40.913968, -85.118597], {icon: appleseedIcon}).bindPopup(appleseedPop).addTo(mymap);


//PAUL BUNYAN (done)

 //create Axe Icon
  var bunyanIcon = L.icon({
    iconUrl: 'icons/bunyan.png',
    iconSize: [113, 125]
  });

 //create Ax Icon, Star Variation


  //create PopUp for AxStar Icon marker

  var bunyanPop = '<p>Paul Bunyan</p> <img src="images/gropper-bunyan.jpg" alt="Paul Bunyan" width="60px">';

    L.marker([46.979212, -116.259056], {icon: bunyanIcon}).bindPopup(bunyanPop).addTo(mymap);
 

 //DAVY CROCKET (done)

 
 //create cap icon
  var crockettIcon = L.icon({
    //set path to icon
    iconUrl: 'icons/crockett.png',
    // size of the icon
    iconSize: [90, 46],
    // point of the icon which will correspond to the marker's location
    //iconAnchor: [0, 8],
    // point of the icon where the popup window will open
    //popupAnchor: [12, 0]
  });

 
  var crockettPop = '<p>Davy Crockett</p> <a href="http://weatherspoon.uncg.edu/collections/show?id=3828"><img src="images/gropper-crockett.jpg" alt="Davy Crockett" width="60px"></a>';

    L.marker([36.050401, -85.531339], {icon: crockettIcon}).bindPopup(crockettPop).addTo(mymap);


 //RIP VAN WINKLE (Done)

 //create beard icon

   var winkleIcon = L.icon({
    //set path to icon
    iconUrl: 'icons/winkle.png',
    // size of the icon
    iconSize: [60, 45]
  });


  var vanwinklePop = '<p>Rip Van Winkle</p> <img src="images/gropper-vanwinkle.jpg" alt="Rip Van Winkle" width="60px">';

    L.marker([43.060211, -75.781283], {icon: winkleIcon}).bindPopup(vanwinklePop).addTo(mymap);


//HEADLESS HORSEMAN

//create horse icon
  var horseIcon = L.icon({
    //set path to icon
    iconUrl: 'icons/horse.png',
    // size of the icon
    iconSize: [28, 32]
  });


  var horsemanPop = '<p>Headless Horseman</p> <img src="images/gropper-horseman.jpg" alt="Headless Horseman" width="60px">';

    //L.marker([41.091944, -73.864444], {icon: horseIconStar}).bindPopup(horsemanPop).addTo(mymap);


 //JOHN HENRY (done)

  var henryIcon = L.icon({
    //set path to icon
    iconUrl: 'icons/henry.png',
    // size of the icon
    iconSize: [69, 90]
  });

  
  var henryPop = '<p>John Henry</p> <img src="images/gropper-henry.jpg" alt="John Henry" width="60px">';

    L.marker([32.770969, -89.276834], {icon: henryIcon}).bindPopup(henryPop).addTo(mymap);

 //var henryHammer = L.marker([36.206453, -82.656004], {icon: horseIcon}).addTo(mymap);

 //FIN MAC COOL (done)

  var mccoolIcon = L.icon({
    //set path to icon
    iconUrl: 'icons/mccool.png',
    // size of the icon
    iconSize: [63, 95]
  });


 var coolPop = '<p>Finn Mac Cool</p> <img src="images/gropper-cool.jpg" alt="Finn Mac Cool" width="60px">';

    L.marker([36.0544, -112.1405], {icon: mccoolIcon}).bindPopup(coolPop).addTo(mymap);

 //JOHN BROWN (done)

 var brownIcon = L.icon({
    //set path to icon
    iconUrl: 'icons/brown.png',
    // size of the icon
    iconSize: [78, 85]
  });


 var brownPop = '<p>John Brown</p> <img src="images/gropper-brown.jpg" alt="John Brown" width="60px">';

    L.marker([38.198802, -96.691208], {icon: brownIcon}).bindPopup(brownPop).addTo(mymap);

//JOE MAGARAC (done)

 var magaracIcon = L.icon({
    //set path to icon
    iconUrl: 'icons/magarac.png',
    // size of the icon
    iconSize: [70, 55]
  });


 var coolPop = '<p>Joe Magarac</p> <img src="images/gropper-magarac.jpg" alt="Joe Magarac" width="60px">';

    L.marker([39.368636, -78.05628], {icon: magaracIcon}).bindPopup(coolPop).addTo(mymap);

//JOE MAGARAC (done)

 var magaracIcon = L.icon({
    //set path to icon
    iconUrl: 'icons/magarac.png',
    // size of the icon
    iconSize: [70, 55]
  });


 var magaracPop = '<p>Joe Magarac</p> <img src="images/gropper-magarac.jpg" alt="Joe Magarac" width="60px">';

  L.marker([39.368636, -78.05628], {icon: magaracIcon}).bindPopup(magaracPop).addTo(mymap);

//MIKE FINK (done)

 var finkIcon = L.icon({
    //set path to icon
    iconUrl: 'icons/fink.png',
    // size of the icon
    iconSize: [65, 72]
  });


 var finkPop = '<p text-align:center>Mike Fink</p> <img src="images/gropper-fink.jpg" alt="Mike Fink" width="60px">';

  L.marker([39.475355, -82.449385], {icon: finkIcon}).bindPopup(finkPop).addTo(mymap);

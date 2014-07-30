"use strict";

// The endpoint with our user submitted data. Should return a JSON object
var domain          = "http://ec2-54-226-215-222.compute-1.amazonaws.com:3000/";
var firstArrayHalf  = [];
var secondArrayHalf = [];

// Placeholder data
var json = [
    {
        "projectName": "Dave Proj 1",
        "videoUrl": "//www.youtube.com/embed/q10JrKlh2Ro",
        "websiteUrl": "www.davidvoyles.wordpress.com",
        "name": "Dave Voyles",
        "tags": ['#Kinect', '#C++', '#Win8'],
        "description": "stuff",
        "rating": 2
    },
    {
        "projectName": "Dave Proj 2",
        "videoUrl": "//www.youtube.com/embed/q10JrKlh2Ro",
        "websiteUrl": "http://indiedevspot.com/",
        "name": "David Crook",
        "tags": ['#Kinect', '#C++', '#Win8'],
        "description": "stuff And things!",
        "rating": 3 
    },
        {
            "projectName": "Dave Proj 3",
        "videoUrl": "//www.youtube.com/embed/q10JrKlh2Ro",
        "websiteUrl": "www.davidvoyles.wordpress.com",
        "name": "Dave Voyles",
        "tags": ['#Kinect', '#C++', '#Win8'],
        "description": "stuff",
        "rating": 2
    },
    {
        "projectName": "Dave Proj 4",
        "videoUrl": "//www.youtube.com/embed/q10JrKlh2Ro",
        "websiteUrl": "http://indiedevspot.com/",
        "name": "David Crook",
        "tags": ['#Kinect', '#C++', '#Win8'],
        "description": "stuff And things!",
        "rating": 3 
    }
];

// Runs as soon as the page loads
$(document).ready(function () {
    splitArray(json);
    createWidgetsLeft(firstArrayHalf);
    createWidgetsMiddle(secondArrayHalf);
});

// Parses JSON from domain, then draws a widget, based on the JSON data
//function parseProjectJSON() {
//    return $.getJSON(domain, function (json) {
//        drawWidget(json);
//        return true;
//    });
//}

// Sift through the JSON object to retrieve the gamertag and avatar image,
// which is then drawn on screen
function parseProjetJSON(json) {

    console.log(json);

    var objectArr = [];

    // We only want the top 10 projects at a time
    for (var i = 0; i < json.length; i++) {
        var jsonObj = json[i];

        //]Create an object for each project    
        var obj = {
            videoUrl:    jsonObj.videoUrl,
            name:        jsonObj.name,
            tags:        jsonObj.tags,
            description: jsonObj.description,
            rating:      jsonObj.rating
        };

        //  store each of the objects in this newly formatted array
        objectArr.push(obj);
        console.log("step2:" + objectArr);
    }

    // Draws widgets to the screen, filling it in with the objects in our array
    createWidget(objectArr);
}


/* Cut the JSON array in half, and create two new arrays.
 * 1st array is drawn to left  side of screen.
 * 2nd array is drawn to right side of screen.
 * @jsonObj - The object you want to cut in half
 *******************************************************************/
function splitArray(jsonObj) {

    var halfwayPoint = Math.floor(jsonObj / 2);
    var indexToSplit = jsonObj.indexOf(halfwayPoint);

    // Create two new arrays: 1st half & 2nd half
    firstArrayHalf   = jsonObj.slice(0, indexToSplit -1);
    secondArrayHalf  = jsonObj.slice(indexToSplit -1 );

    console.log(firstArrayHalf);
    console.log(secondArrayHalf);
}


/* Draw project widget to screen
 * @objectArr - array of projects as a JSON object.
 *        var obj = {
 *           videoUrl:    jsonObj.videoUrl,
 *           name:        jsonObj.name,
 *           tags:        jsonObj.tags,
 *           description: jsonObj.description,
 *           rating:      jsonObj.rating
 *       };
 *******************************************************************/
function createWidgetsLeft(firstArrayHalf) {

    // Container which holds all of the widgets
    var $leftColumn = $('.column_left');

    for (var i = 0; i < firstArrayHalf.length; i++) {

        // Create a div container for each project, and inject it to the container
        $leftColumn.append(
            ' <!------------- APP ---------------> ' +
            ' <div class="menu_box"> ' +
            '     <h3>' + firstArrayHalf[i].projectName + '</h3> ' +
            '     <div class="video_palyer"> ' +
            '         <iframe src=' + firstArrayHalf[i].videoUrl + ' width="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe> ' +
            '     </div> ' +
            ' </div> ' +
            ' <div class="tweets"> ' +
            '     <h3><i> </i>Description</h3> ' +
            '     <div class="synopsis_list"> ' +
            '         <ul> ' +
            '             <li> ' +
            '                ' + firstArrayHalf[i].description + '' +
            '                 <span>' + firstArrayHalf[i].name + '</span> ' +
            '                 <span><a href="' + firstArrayHalf[i].websiteUrl + '">' + firstArrayHalf[i].websiteUrl + '</a></span> ' +
            '             </li> ' +
            '             <li> ' +
            '                 <div class="keywords_list"> ' +
            '                     <ul> ' +
            '                         <li><a href="#" class="red">' + firstArrayHalf[i].tags[0] + '</a></li>  ' +
            '                         <li><a href="#" class="purple">' + firstArrayHalf[i].tags[1] + '</a></li> ' +
            '                         <li><a href="#" class="yellow">' + firstArrayHalf[i].tags[2] + '</a></li> ' +
            '                         <div class="clear"></div> ' +
            '                     </ul> ' +
            '                 </div> ' +
            '             </li> ' +
            '         </ul> ' +
            '     </div> ' +
            ' </div> '
        );
    }
};


/* Draw project widget to screen
 * @objectArr - array of projects as a JSON object.
 *        var obj = {
 *           videoUrl:    jsonObj.videoUrl,
 *           name:        jsonObj.name,
 *           tags:        jsonObj.tags,
 *           description: jsonObj.description,
 *           rating:      jsonObj.rating
 *       };
 *******************************************************************/
function createWidgetsMiddle(secondArrayHalf) {

    // Container which holds all of the widgets
    var $middleColumn = $('.column_middle');

    for (var i = 0; i < secondArrayHalf.length; i++) {

        // Create a div container for each project, and inject it to the container
        $middleColumn.append(
            ' <!------------- APP ---------------> ' +
            ' <div class="menu_box"> ' +
            '     <h3>' + secondArrayHalf[i].projectName + '</h3> ' +
            '     <div class="video_palyer"> ' +
            '         <iframe src=' + secondArrayHalf[i].videoUrl + ' width="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe> ' +
            '     </div> ' +
            ' </div> ' +
            ' <div class="tweets"> ' +
            '     <h3><i> </i>Description</h3> ' +
            '     <div class="synopsis_list"> ' +
            '         <ul> ' +
            '             <li> ' +
            '                ' + secondArrayHalf[i].description + '' +
            '                 <span>' + secondArrayHalf[i].name + '</span> ' +
            '                 <span><a href="' + secondArrayHalf[i].websiteUrl + '">' + secondArrayHalf[i].websiteUrl + '</a></span> ' +
            '             </li> ' +
            '             <li> ' +
            '                 <div class="keywords_list"> ' +
            '                     <ul> ' +
            '                         <li><a href="#" class="red">' + secondArrayHalf[i].tags[0] + '</a></li>  ' +
            '                         <li><a href="#" class="purple">' + secondArrayHalf[i].tags[1] + '</a></li> ' +
            '                         <li><a href="#" class="yellow">' + secondArrayHalf[i].tags[2] + '</a></li> ' +
            '                         <div class="clear"></div> ' +
            '                     </ul> ' +
            '                 </div> ' +
            '             </li> ' +
            '         </ul> ' +
            '     </div> ' +
            ' </div> '
        );
    }
};
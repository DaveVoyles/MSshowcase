// The endpoint with our user submitted data. Should return a JSON object
var domain = "http://ec2-54-226-215-222.compute-1.amazonaws.com:3000/";
// Placeholder data
var json = [
    {
        "projectName": "Dave V's Project",
        "videoUrl": "//www.youtube.com/embed/q10JrKlh2Ro",
        "websiteUrl": "www.davidvoyles.wordpress.com",
        "name": "Dave Voyles",
        "tags": ['#Kinect', '#C++', '#Win8'],
        "description": "stuff"
    },
    {
        "projectName": "Daveid Crook's Project",
        "videoUrl": "//www.youtube.com/embed/q10JrKlh2Ro",
        "websiteUrl": "http://indiedevspot.com/",
        "name": "David Crook",
        "tags": ['#Kinect', '#C++', '#Win8'],
        "description": "stuff And things!"
    }
];

// Runs as soon as the page loads
$(document).ready(function () {
    //parseProjetJSON(json);
    createWidget(json);
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
            description: jsonObj.description
        };

        //  store each of the objects in this newly formatted array
        objectArr.push(obj);
        console.log("step2:" + objectArr);
    }

    // Draws widgets to the screen, filling it in with the objects in our array
    createWidget(objectArr);
}


/* Draw project widget to screen
 * @projectArr - array of projects as a JSON object. Image is a url path
 *       var obj = {
 *          videoURL:    (jsonObj.gamerTag).toString(),
 *          name:        (jsonObj.avatarLg).toString(),
 *          tags:        (jsonObj.avatarLg).toString(),
 *          description: (jsonObj.avatarLg).toString(),
 *      };
 *******************************************************************/
function createWidget(jsonObj) {

    // Container which holds all of the gamertags
    var $leftColumn = $('.column_left');

    for (var i = 0; i < jsonObj.length; i++) {

        // Create a div container for each image and name
        $leftColumn.append(
            ' <!------------- APP ---------------> ' +
            ' <div class="menu_box"> ' +
            '     <h3>'+jsonObj[i].projectName+'</h3> ' +
            '     <div class="video_palyer"> ' +
            '         <iframe src='+jsonObj[i].videoUrl+' width="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe> ' +
            '     </div> ' +
            ' </div> ' +
            ' <div class="tweets"> ' +
            '     <h3><i> </i>Description</h3> ' +
            '     <div class="synopsis_list"> ' +
            '         <ul> ' +
            '             <li> ' +
            '                '+jsonObj[i].description+'' +
            '                 <span>'+jsonObj[i].name+'</span> ' +
            '                 <span><a href="'+jsonObj[i].websiteUrl+'">' + jsonObj[i].websiteUrl + '</a></span> ' +
            '             </li> ' +
            '             <li> ' +
            '                 <div class="keywords_list"> ' +
            '                     <ul> ' +
            '                         <li><a href="#" class="red">'+jsonObj[i].tags[0]+'</a></li>  ' +
            '                         <li><a href="#" class="purple">' + jsonObj[i].tags[1] + '</a></li> ' +
            '                         <li><a href="#" class="yellow">' + jsonObj[i].tags[2] + '</a></li> ' +
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

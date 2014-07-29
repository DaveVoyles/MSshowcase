/* Create a series of containers, to showcase content
 * Author: Dave Voyles, ©2014 Microsoft Corporation 
 */

// Setup Widget namespace
var widget = widget || {};

widget.widgetCreator = {

    createNetworks: function () {
        var html = [""];

        html.push('<!-- Networks -->' +
            '<div class="widget stacked ">' +
            '<div id="networks-header" class="widget-header">' +
            '<h3> Top 10 Networks</h3>' +
            '</div>' +
            '<div id="networks-container">' +
            '<!-- Load Network Images here -->' +
            '</div>' +
            '</div> <!-- /widget -->');

        return html.join('');
    },

    createMovies: function () {
        var html = [""];

        html.push('<!-- MOVIES -->' +
            '<div class="widget stacked">' +
            '<div id="movies-header" class="widget-header">' +
            '<h3> Top 10 Movies</h3>' +
            '</div>' +
            '<div id="movies-container">' +
            '<!-- Load Movie Images here -->' +
            '</div>' +
            '</div> <!-- /widget -->');

        return html.join('');
    },

    createTimeZones: function () {
        var html = [""];

        html.push('<!-- Time Zones -->' +
            '<div class="widget stacked">' +
            '<div id="time-zones-header" class="widget-header">' +
            '<h3>Time Zones</h3>' +
            '</div>' +
            '<div class="widget-content">' +
            '<div id="time-zones-container">' +
            '</div>' +
            '</div>' +
            '</div> <!-- /widget -->');

        return html.join('');
    },

    createErrors: function () {
        var html = [""];

        html.push('<!--TOP 8 ERRORS-->' +
            '<div class="widget stacked">' +
            '<div id="errors-header" class="widget-header">' +
            '<h3>Top 8 Errors</h3>' +
            '</div>' +
            '<div class="widget-content">' +
            '<div id="errors-container">' +
            '</div>' +
            '</div>' +
            '</div> <!-- /widget -->');

        return html.join('');
    },

    createGamertags: function () {
        var html = [""];

        html.push('<!-- GAMERTAG -->' +
            '<div class="widget stacked ">' +
            '<div id="gamertags-header" class="widget-header">' +
            '<h3> Top 10 Gamertags</h3>' +
            '</div>' +
            '<div id="gamertag-container">' +
            '<!-- Load Gamertag Images here -->' +
            '</div>' +
            '</div> <!-- /widget -->');

        return html.join('');
    },

    createActivations: function () {
        var html = [""];

        html.push('<!-- Activations -->' +
            '<div class="widget stacked">' +
            '<div id="user-stats-header" class="widget-header">' +
            '<h3>User Stats</h3>' +
            '</div>' +
            '<div class="widget-content">' +
            '<div id="activation-number">0</div>' +
            '<div id="total-activations">Total Activations</div>' +
            '<div id="user-number">0</div>' +
            '<div id="unique-users">Unique Users</div>' +
            '</div>' +
            '</div> <!-- /widget -->');

        return html.join('');
    },

    createUserBreakdown: function () {
        var html = [""];

        html.push('<!--USER BREAKDOWN-->' +
            '<div id="user-beakdown" class="widget stacked">' +
            '<div id="user-breakdown-header" class="widget-header">' +
            '<h3>User Breakdown</h3>' +
            '</div>' +
            '<div class="widget-content">' +
            '<div id="user-breakdown-container"></div>' +
            '<hr/>' +
            '<div id="parental-container"></div>' +
            '<hr/>' +
            '<div id="subscription-container"></div>' +
            '</div>' +
            '</div> <!-- /widget -->');

        return html.join('');
    },

    createConcurrency: function () {
        var html = [""];

        html.push('<!--CONCURRENCY-->' +
            '<div class="widget widget-nopad stacked">' +
            '<div id="concurrency-header" class="widget-header">' +
            '<h3>Concurrency</h3>' +
            '</div>' +
            '<div class="widget-content">' +
            '<iframe id="concurrencyGraph" src="https://intel.xcal.tv/dashboards/15-columbus-summary-dashboard"></iframe>' +
            '</div>' +
            '</div> <!-- /widget -->');

        return html.join('');
    },

    createProject: function () {
        var html = [""];

        html.push(
           ' <!------------- APP ---------------> ' +
           ' <div class="menu_box"> ' +
           '     <h3>My Cool Kinect App</h3> ' +
           '     <div class="video_palyer"> ' +
           '         <iframe src="//www.youtube.com/embed/q10JrKlh2Ro" width="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe> ' +
           '     </div> ' +
           ' </div> ' +
           ' <div class="tweets"> ' +
           '     <h3><i> </i> Synopsis</h3> ' +
           '     <div class="synopsis_list"> ' +
           '         <ul> ' +
           '             <li> ' +
           '                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. ' +
           '                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. ' +
           '                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. ' +
           '                 <span>Developer Name</span> ' +
           '                 <span><a href="www.davidvoyles.wordpress.com">Website URL</a></span> ' +
           '             </li> ' +
           '             <li> ' +
           '                 <div class="keywords_list"> ' +
           '                     <ul> ' +
           '                         <li><a href="#" class="red">  #Kinect</a></li>  ' +
           '                         <li><a href="#" class="purple">  #Win8</a></li> ' +
           '                         <li><a href="#" class="yellow">  #C++</a></li> ' +
           '                         <div class="clear"></div> ' +
           '                     </ul> ' +
           '                 </div> ' +
           '             </li> ' +
           '         </ul> ' +
           '     </div> ' +
           ' </div> '
            );
            
        return html.join('');
    }
};


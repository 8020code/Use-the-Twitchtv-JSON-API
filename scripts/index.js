/*jslint browser: true*/
/*global $, jQuery*/
/*global document, window, alert, console, require*/

$(document).ready(function () {
  'use strict';
  // freecodecamp
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function (data) {

    if (data.stream !== null) {
      $("#fcc").append(data.stream.channel.game);
    } else {
      $("#fcc").append("OFFLINE");
    }
  });
  //always live "ESL_SC2"
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?', function (data) {
    //console.log(data);
    if (data.stream !== null) {
      $("#esl").append(data.stream.channel.game);
    } else {
      $("#esl").append("OFFLINE");
    }
  });

  // #main 
  var i = 0;
  var users = ["ESL_SC2", "OgamingSC2", "blastproseries", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  for (i in users) {
    var url = 'https://wind-bow.gomix.me/twitch-api/streams/'  + '?callback=?';
    var url2 = 'https://wind-bow.glitch.me/twitch-api/users/' + users[i];
    $.getJSON(url2, function (data) {
      //console.log(data);
      //console.log(channels[i]);
      // if (data.stream !== null) {
      //   $("#main").append('<a class="row " href="https://www.twitch.tv/' + channels[i] + '">' + '<img src="' + data.stream.preview.small + '" class="rounded m-1 bordd">' + data.stream.channel.display_name + '</a><br>');
      //   console.log(channels[i]);
      // }
      $("#main").append('<span class="row">');
      $("#main").append('<img class="rounded m-1 bordd" src="' + data.logo + '">');
      
      $("#main").append(data.display_name);      
      $("#main").append('</span>');
      $.getJSON(url, function (data2) {
        if (data2.stream !== null) {
          $("#main").append('<a class="row " href="https://www.twitch.tv/' + users[i] + '">'+ users[i] + '</a><br>');
          console.log(users[i]);          
        } else {
          $("#main").append('<span>offline</span><br>');
        }

      });
    });



  }

});
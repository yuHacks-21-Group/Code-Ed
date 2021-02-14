/*
This is the main JavaScript file for Code-Ed. This file handles operations like 
*/

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {stickybar()};

// // Get the navbar
// var sidebar = document.getElementById("sidebar");

// // Get the offset position of the navbar
// var sticky = sidebar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickybar() {
//   if (window.pageYOffset >= sticky) {
//     sidebar.classList.add("sticky")
//   } else {
//     sidebar.classList.remove("sticky");
//   }
// }

//API_KEY from Google Credentials
//let API_KEY = "AIzaSyBTrwHONkXik6Dfm6XnMC3rda3IBsl0Ys4"

function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("AIzaSyBTrwHONkXik6Dfm6XnMC3rda3IBsl0Ys4");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "maxResults": 25,
      "q": "surfing"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "989850531815-3dr7nh4nq6ggtna0l7kmkcqs3pposiji.apps.googleusercontent.com"});
  });

//Function to go to the home page when the Home button is selected
function goHome(){
  window.location="/index.html";
}

//Function to go to the About Us page when the About Us button is selected
function goAbout(){
  window.location="/about.html";
}

//Function to go to the More Challenges page when the More Challenges button is selected
function goChallenges(){
  window.location="/challenges.html";
}

//Function to go to the Python page when the Python button is selected
function goPython(){
  window.location="/python.html";
  //videoSearch(API_KEY, "Python", 9)
}

//Function to go to the Java page when the Java button is selected
function goJava(){
  window.location="/java.html";
}

//Function to go to the C page when the C button is selected
function goC(){
  window.location="/c.html";
}

//Functions to interact with YouTube API

// $(document).ready(function(){

// var video = ""

// function videoSearch(key, search, maxResults) {

//   //$("#videos").empty(); //this clears out the old data when we make a new request.

//   //inside this method make a GET request to the YouTube API.
//   $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,function(data){
//     console.log(data)

//     data.items.forEach(item => {
//       var video = `

//         <div class="column">
//           <div class="card">
//               <iframe class="youtubeResult"
//               src="https://www.youtube.com/embed/${item.id.videoId}" allowfullscreen>
//               </iframe>
//           </div>
//         </div>

//       `

//       $("#youtube_div").append(video)
//     })

//   })

// }

// })

// $(document).ready(function(){

// var API_KEY = "AIzaSyBTrwHONkXik6Dfm6XnMC3rda3IBsl0Ys4"

// var video = ""

// function videoSearch(key, search, maxResults) {

//   $("#videos").empty() //this clears out the old data when we make a new request.

//   //inside this method make a simple GET request.
//   $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,function(data){
//     console.log(data)

//     data.items.forEach(item => {
//       video = `
      
//       <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
      
//       `

//       $("#videos").append(video)
//     })

//   })

/**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

  
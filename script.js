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
let API_KEY = "AIzaSyBTrwHONkXik6Dfm6XnMC3rda3IBsl0Ys4"

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
  videoSearch(API_KEY, "Python", 9)
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

function videoSearch(key, search, maxResults) {

  $("#videos").empty(); //this clears out the old data when we make a new request.

  //inside this method make a GET request to the YouTube API.
  $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,function(data){
    console.log(data)

    data.items.forEach(item => {
      var video = `

        <div class="column">
          <div class="card">
              <iframe class="youtubeResult"
              src="https://www.youtube.com/embed/${item.id.videoId}" allowfullscreen>
              </iframe>
          </div>
        </div>

      `

      $("#youtube_div").append(video)
    })

  })

}


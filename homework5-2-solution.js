console.log("Start");

function displayError(errorMessage) {
    console.error(new Error(errorMessage));
  }

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email, password, goodJob, defeatCallback) {
if (Object.keys(usersDB).includes(email)){
    setTimeout(() => {
        console.log("now we have the data of user", email);
        goodJob({userEmail: email});
    }, 3000);
} else { 
    setTimeout(() => {
        defeatCallback("user not found");
    }, 3000);
}
}


function getUserVideos(email, goodJob, defeatCallback){
    if (usersDB[email].length > 0) {
        setTimeout(() => {
            goodJob(usersDB[email]);    
            }, 2000);  
    } else {
        setTimeout (() => {
          defeatCallback("Videos not found");
    }, 2000);
}
}


function videoDetails(video, goodJob, defeatCallback) {
    if (video && video.title){
    setTimeout(() => {
        goodJob(video.title);
    }, 2000);
} else {
    setTimeout(() => {
        defeatCallback("Video Title not found")
    }, 2000);
}
}

const getPassedUsersFirstVideoTitle = (user) =>
    loginUser(user, 1234, (user) => {
        console.log("user:", user);
    getUserVideos (user.userEmail, (videos) => {
        console.log("videos:", videos);
    videoDetails(videos[0], (title) =>{
        console.log("title:", title);
    });
    });
    });

getPassedUsersFirstVideoTitle("user4@hw.js");
getPassedUsersFirstVideoTitle("user3@hw.js");
getPassedUsersFirstVideoTitle("user2@hw.js");
getPassedUsersFirstVideoTitle("user1@hw.js");



console.log("Finish");


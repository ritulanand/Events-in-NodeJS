import { UserEvents } from "./userEvents.mjs";

const userEvent = new UserEvents();
// userEvent.createPost('This is my first post');



function saveToDatabase(){
    console.log("saving post to database");
}

function sendNotification(){
    console.log("sending notifications")
}

function updateTimeline(){
    console.log("updating timeline")
}


userEvent.addListener("postCreated", saveToDatabase)
userEvent.addListener("postCreated", sendNotification)
userEvent.addListener("postCreated", updateTimeline)

userEvent.createPost('This is my first post');
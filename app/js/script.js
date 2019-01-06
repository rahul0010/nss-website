var activity = document.getElementById('activity');
var activityData = "";
var camps = document.getElementById('camp');
var campsData = "";
var workshop = document.getElementById('workshop');
var workshopData = "";
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAGkzK5YdLRJOZVDEWG-1AgCCtfslzD_po",
    authDomain: "nationalitenssapp.firebaseapp.com",
    databaseURL: "https://nationalitenssapp.firebaseio.com",
    projectId: "nationalitenssapp",
    storageBucket: "nationalitenssapp.appspot.com",
    messagingSenderId: "301966822272"
};
firebase.initializeApp(config);
var database = firebase.database();
database.ref('data').once('value').then(response => {return response.val()}).then(response => {
    var data = response['activities'];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            activityData += `<div class="activity__box">
                <img src="${data[key]['imageurl']}" alt="${data[key]['title']}" class="activity__box--img">
                <span class="activity__box--title">${data[key]['title']}</span>
                <span class="activity__box--date">${data[key]['date']}</span>
                <span class="activity__box--description">${data[key]['details']}</span>
                <span class="activity__box--place">Place: ${data[key]['place']}</span>
            </div>`;
        }
    }
    var data = response['camps'];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            campsData += `<div class="activity__box">
                <img src="${data[key]['imageurl']}" alt="${data[key]['title']}" class="activity__box--img">
                <span class="activity__box--title">${data[key]['title']}</span>
                <span class="activity__box--date">${data[key]['date']}</span>
                <span class="activity__box--description">${data[key]['details']}</span>
                <span class="activity__box--place">Place: ${data[key]['place']}</span>
            </div>`;
        }
    }
    var data = response['workshops'];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            workshopData += `<div class="activity__box">
                <img src="${data[key]['imageurl']}" alt="${data[key]['title']}" class="activity__box--img">
                <span class="activity__box--title">${data[key]['title']}</span>
                <span class="activity__box--date">${data[key]['date']}</span>
                <span class="activity__box--description">${data[key]['details']}</span>
                <span class="activity__box--place">Place: ${data[key]['place']}</span>
            </div>`;
        }
    }
    activity.innerHTML = activityData;
    camps.innerHTML = campsData;
    workshop.innerHTML = workshopData;
})


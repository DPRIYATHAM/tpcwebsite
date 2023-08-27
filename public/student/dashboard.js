import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, doc, getDocs, getDoc, collection } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import {firebaseConfig} from "../config.js";

const uid = localStorage.getItem("userid");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const dateobj = new Date(); 
var date = dateobj.getFullYear() + "-" + String(dateobj.getMonth()+1).padStart(2,"0") + "-" + String(dateobj.getDate()).padStart(2, '0'); 
const drive_events = collection(db, 'drives');

function create_drives(events){
  try {
    var C = "";
    for (var i = 0; i < events.length; i++) {
      var drivesList = document.getElementById('drives_list');
      var content = '<div class="content">' +
      '<img src="../images/company.png" />' +
      '<p class="heading">' + events[i].title + '</p>' +
      '<p class="roles">' + events[i].roles + '</p>';
      if (events[i].internship) {
        content += '<ul class="abt">' + 
        '<li> <b>Internship:</b> ' + events[i].stipend + '</li>' +
        '<li style="padding-left: 0.7rem;"> Duration: ' + events[i].iduration + '</li>' +
        '<li style="padding-left: 0.7rem;"> Location: ' + events[i].ilocation + '</li>' +
        '</ul>';
      }
      if (events[i].placement) {
        content += '<ul class="abt">' + 
        '<li> <b>Placement:</b> ' + events[i].CTC + '</li>' +
        '<li style="padding-left: 1rem;"> Location: ' + events[i].plocation + '</li>' +
        '</ul>';
      }
      content += 
      '<button id="details_button" onclick="drivepage(value)" value="'+ events[i].drive_id+'" >View Details</button>' +
      '</div>' +
      '<hr/>';
      C += content;
    }
    drivesList.innerHTML = C;
    
  }
  catch(e){
    alert(e);
  }
}

document.addEventListener('DOMContentLoaded', async function() {
  try{

    const Userdetails = doc(db, "users", uid);
    var user = await getDoc(Userdetails);
    document.getElementById('wel_name').innerHTML = "Welcome, " + user.data().name;
    
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      fixedWeekCount: false,
      eventMouseEnter: function(info) {
        const eventTitle = info.event.title;
        // Show the full event name on hover
        info.el.setAttribute('title', eventTitle);
      },
      eventMouseLeave: function(info) {
        // Remove the title attribute on mouse leave
        info.el.removeAttribute('title');
      }
      // showNonCurrentDates: false,
    });
    var events = [];
    await getDocs(drive_events).then((event_list)=>{
      event_list.forEach((doc) => {
        var temp = doc.data();
        temp['drive_id'] = doc.id;
        temp['url'] = "drivepage.html?drive_id=" + doc.id;  
        events.push(temp);
      });
    });

    const dl = doc(db, 'drives', 'deadlines');
    var drive_dls = await getDoc(dl); 
    var drive_deadlines = new Map(Object.entries(drive_dls.data()));
    
    for (let key of drive_deadlines.keys()) {
      var temp = drive_deadlines.get(key);
      var ds = doc(db, "drives", key);
      var drivedetails = await getDoc(ds);
      temp['title'] =  drivedetails.data().title + " Deadline";
      temp['url'] = "drivepage.html?drive_id=" + key;
      temp['color'] = 'red';
      events.push(temp);
    }
    calendar.addEventSource(events);
    calendar.render();

    events.sort(function(a, b) {
      var dateA = new Date(a.start), dateB = new Date(b.start);
      return dateA - dateB;
    });
    for (var i = 0; i < events.length; i++) {
      if (events[i].start <= date & events[i].end >= date) {
        document.getElementById('ongoing').innerHTML += "<h6>" + events[i].title + "</h6>" + "<ul><li style='font-size:1rem;'>" + events[i].roles + "</li></ul>" ;
      }
      if (events[i].start == date && events[i].title.includes("Deadline")) {
        document.getElementById('ongoing').innerHTML += "<h6 style='color:red;'>" + events[i].title + "</h6>" ;
      }
    }
  }
  catch(e){
    alert(e);
  }
});

document.getElementById("past_drives").addEventListener("click", async function () {
  document.getElementById("past_drives").style.backgroundColor = "#143551";
  document.getElementById("past_drives").style.color = "white";
  document.getElementById("upcoming_drives").style.backgroundColor = "#eaeaea";
  document.getElementById("upcoming_drives").style.color = "#143551";
  document.getElementById("upcoming_drives").style.border = "1px solid #143551";
  var events = [];
  await getDocs(drive_events).then((event_list)=>{
    event_list.forEach((doc) => {
      var temp = doc.data();
      temp['drive_id'] = doc.id;
      temp['url'] = "drivepage.html?drive_id=" + doc.id;
      if (temp.end < date) {
        events.push(temp);
      }
    });
  });
  create_drives(events);
});

document.getElementById("upcoming_drives").addEventListener("click", async function () {
  document.getElementById("upcoming_drives").style.backgroundColor = "#143551";
  document.getElementById("upcoming_drives").style.color = "white";
  document.getElementById("past_drives").style.backgroundColor = "#eaeaea";
  document.getElementById("past_drives").style.color = "#143551";
  document.getElementById("past_drives").style.border = "1px solid #143551";
  var events = [];
  await getDocs(drive_events).then((event_list)=>{
    event_list.forEach((doc) => {
      var temp = doc.data();
      temp['drive_id'] = doc.id;
      temp['url'] = "drivepage.html?drive_id=" + doc.id;
      if (temp.end >= date) {
        events.push(temp);
      }
    });
  });
  create_drives(events);
});

document.getElementById("upcoming_drives").click();
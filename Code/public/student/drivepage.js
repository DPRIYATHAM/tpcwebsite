import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, doc, getDocs, getDoc, setDoc, collection } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import {firebaseConfig} from "../config.js";

const uid = localStorage.getItem("userid");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const dateobj = new Date(); 
var date = dateobj.getFullYear() + "-" + String(dateobj.getMonth()+1).padStart(2,"0") + "-" + String(dateobj.getDate()).padStart(2, '0'); 

const urlParams = new URLSearchParams(window.location.search);
const drive_id = urlParams.get('drive_id');

document.addEventListener('DOMContentLoaded', async function() {
  try{
    const Userdetails = doc(db, "users", uid);
    var user = await getDoc(Userdetails);
    document.getElementById('wel_name').innerHTML = "Welcome, " + user.data().name;
    
    const drive_events = collection(db, 'drives');
    var events = [];
    await getDocs(drive_events).then((event_list)=>{
      event_list.forEach((doc) => {
        var temp = doc.data();
        temp['drive_id'] = doc.id;
        temp['url'] = "drivepage.html?drive_id=" + doc.id;
        events.push(temp);
      });
    });

    events.sort(function(a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });

    for (var i = 0; i < events.length; i++) {
      if (events[i].title) {
      var drivesList = document.getElementById('drives_list');
      var content = '<div class="content">' +
        '<img src="../images/company.png" />' +
        '<p class="heading">' + events[i].title + '</p>' +
        '<p class="roles">' + events[i].roles + '</p>';
      if (events[i].internship) {
        content += '<ul class="abt">' + 
        '<li> <b>Internship:</b> ' + events[i].stipend + '</li>' +
        '<li> Duration: ' + events[i].iduration + '</li>' +
        '<li> Location: ' + events[i].ilocation + '</li>' +
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
      drivesList.innerHTML += content;
    }
    }
    const ds = doc(db, "drives", drive_id);
    var drivedetails = await getDoc(ds);
    const dl = doc(db, 'drives', 'deadlines');
    var drive_dls = await getDoc(dl); 
    var deadline = drive_dls.data()[drive_id]['start'];
    document.getElementById('com_name').innerHTML = drivedetails.data().title;
    document.getElementById('com_role').innerHTML = drivedetails.data().roles ;
    document.getElementById('jd').innerHTML += 
    '<h3 style="margin-left: 1rem; text-align: center;">Description</h3> <hr/>' + drivedetails.data().description +
    '<h3 style="margin-left: 1rem; text-align: center;">Timeline</h3> <hr/>' +
    '<p class="deadline">' + "Apply before: " + deadline + '</p>'+
    '<div class = "det">'+
    '<ul>' +
    '<li> <b>Start Date:</b> ' + drivedetails.data().start  + '</li>' +
    '<li> <b>End Date:</b> ' + drivedetails.data().end + '</li>' +
    '</ul>';
    '</div>';
    
    if (drivedetails.data().internship) {
      document.getElementById('Internship').innerHTML = '<h3>Internship</h3>' +
      '<hr/>'+
      '<ul>' + 
      '<li> <b>Stipend:</b> ' + drivedetails.data().stipend + '</li>' +
      '<li> Duration: ' + drivedetails.data().iduration + '</li>' +
      '<li> Location: ' + drivedetails.data().ilocation + '</li>' +
      '<li> Branches: ' + drivedetails.data().branches + '</li>' +
      '<li> Batches: '+ drivedetails.data().ibatches +'</li>' +
      '</ul>';
    }
    if (drivedetails.data().placement) {
      document.getElementById('Placement').innerHTML = '<h3>Placement</h3>' +
      '<hr/>'+
      '<ul>' + 
      '<li> <b>CTC:</b> ' + drivedetails.data().CTC + '</li>' +
      '<li> Location: ' + drivedetails.data().plocation + '</li>' +
      '<li> Branches: ' + drivedetails.data().branches + '</li>' +
      '<li> Batch: '+ 2024 +'</li>' +
      '</ul>';
    }
    document.getElementById('eligibility').innerHTML = '<h3>Eligibility</h3>' +
    '<hr/>'+
    '<ul>' +
    '<li> <b>CGPA:</b> ' + drivedetails.data().min_cgpa + '</li>' +
    '<li> <b>Backlogs:</b> ' + '0' + '</li>' +
    '<li> <b>Branches:</b> ' + drivedetails.data().branches + '</li>' +
    '</ul>';

    document.getElementById('stats').innerHTML = '<h3>Stats</h3> <hr/>' + 
    '<ul><li><b>No Of Students Applied:</b> ' +  Object.keys(drivedetails.data().applied).length + '</li></ul><br>';
    
    var content =  '<h3>Details Collecting</h3> <hr/>';
    for (var i = 0; i < drivedetails.data().student_details.length; i++) {
      if (i % 5 == 0) {
        content += '<ul style=" flex-direction: row; display: flex; list-style-type: disc; align-items:center;">' +
         '<li style="width:25%; ">' + drivedetails.data().student_details[i] + '</li>';
      }
      else{
        content += '<li style="width:25%; ">' + drivedetails.data().student_details[i] + '</li>' ;
      }
      if (i % 5 == 4) {
        content += '</ul>';
      }
    }
    content += '</ul>';
    document.getElementById('student_det').innerHTML = content;


    // alert("usercgpa:",user.data().cgpa, "mincgpa:",drivedetails.data().min_cgpa, "backlogs:",user.data().backlogs, "branches:",drivedetails.data().branches, "course:",user.data().course);
    // var user = await getDoc(Userdetails);
    // alert(applied, drive_id);
    if (user.data().cgpa > drivedetails.data().min_cgpa && user.data().backlogs == "No" && drivedetails.data().branches.includes(user.data().course)) {
      document.getElementById('apply').style.backgroundColor = "green";
      var applied = new Map(Object.entries(user.data().applied));
      if(applied.has(drive_id)){
        document.getElementById('apply').style.backgroundColor = "#ecab1f";
        document.getElementById('apply').innerHTML = "Applied";
      }
    }
    else {
      document.getElementById('apply').style.backgroundColor = "red";
    }
  }
  catch(e){
    alert(e);
  }
});

document.getElementById("apply").addEventListener('click', async function() {
  const Userdetails = doc(db, "users", uid);
  var user = await getDoc(Userdetails);
  const ds = doc(db, "drives", drive_id);
  var drivedetails = await getDoc(ds);
  var applied = new Map(Object.entries(user.data().applied));
  var appliedd = user.data().applied;
  var stu_applied = new Map(Object.entries(drivedetails.data().applied));
  var stu_appliedd = drivedetails.data().applied;
  const dl = doc(db, 'drives', 'deadlines');
  var drive_dls = await getDoc(dl); 
  var deadline = drive_dls.data()[drive_id]['start'];
  try{  
    if(applied.has(drive_id)){
        document.getElementById('apply').innerHTML = "Applied";
        document.getElementById('apply').style.backgroundColor = "#ecab1f";
      alert("You have already applied for this drive!");
    }
    else if (user.data().cgpa > drivedetails.data().min_cgpa && user.data().backlogs == "No" && drivedetails.data().branches.includes(user.data().course) && date < deadline) {
      appliedd[drive_id] = ["Placement","Applied"];
      stu_appliedd[uid] = ["Placement","Applied"];
      const driveSnap = await setDoc(doc(db, "drives", drive_id), {
        applied: stu_appliedd
      },
      { merge: true });
      const userSnap = await setDoc(doc(db, "users", uid), {
        applied: appliedd
      },
      { merge: true });
      alert("Applied Successfully!");
    }
    else {
      alert("Sorry, You can't apply for this drive, Please check the Eligibilites!, Deadline!");
    }
    location.reload();
  }
  catch(e){
    alert(e);
  }
});
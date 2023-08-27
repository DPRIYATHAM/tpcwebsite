import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, doc, getDocs, getDoc, setDoc, collection } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import {firebaseConfig} from "../config.js";
import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const uid = localStorage.getItem("userid");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


document.getElementById("log_out").addEventListener('click', async function() {
    signOut(auth).then(() => {
        localStorage.removeItem("userid");
        window.location.href = "../index.html";
    }).catch((error) => {
        console.error(e);
    });
});

document.getElementById('basic').addEventListener('click', async function() {   
    const Userdetails = doc(db, "users", uid);
    var usr = await getDoc(Userdetails);
    var user = usr.data();
    document.getElementById('wel_name').innerHTML = "Welcome, " + usr.data().name;
    document.getElementById('basic').style.backgroundColor = "#143551";
    document.getElementById('basic').style.color = "white";
    document.getElementById('educational').style.backgroundColor = "white";
    document.getElementById('educational').style.color = "#143551";
    document.getElementById("educational").style.border = "1px solid #143551";
    document.getElementById('additional').style.backgroundColor = "white";  
    document.getElementById('additional').style.color = "#143551";  
    document.getElementById("additional").style.border = "1px solid #143551";
    document.getElementById('history').style.backgroundColor = "white";  
    document.getElementById('history').style.color = "#143551";  
    document.getElementById("history").style.border = "1px solid #143551";
    
    
    document.getElementById('details').innerHTML =
    '<table>' +
    '<tr>' +
    '<td> <b> Name: </b> </td>' +
    '<td> ' + user.name + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Roll Number: </b> </td>' +
    '<td> ' + user.roll_number + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> College Email: </b> </td>' +
    '<td> <a style="color:white"href =mailto:"' + user.clg_email + '" </a>' + user.clg_email + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Program: </b> </td>' +
    '<td> ' + user.degree + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Branch: </b> </td>' +
    '<td> ' + user.course + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Batch: </b> </td>' +
    '<td> ' + user.batch + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Personal Email: </b> </td>' +
    '<td> <a style="color:white"href =mailto:"' + user.prsnl_email + '" </a>' + user.prsnl_email + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Phone: </b> </td>' +
    '<td> ' + user.phone_number + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Gender: </b> </td>' +
    '<td> ' + user.gender + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Date of Birth: </b> </td>' +
    '<td> ' + user.dob + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Address: </b> </td>' +
    '<td> ' + user.address + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> City: </b> </td>' +
    '<td> ' + user.city + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> State: </b> </td>' +
    '<td> ' + user.state + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Pincode: </b> </td>' +
    '<td> ' + user.pincode + '</td>' +
    '</tr>' +
    '</table>';
});

document.getElementById('educational').addEventListener('click', async function() {
    const Userdetails = doc(db, "users", uid);
    var usr = await getDoc(Userdetails);
    var user = usr.data();

    document.getElementById('educational').style.backgroundColor = "#143551";
    document.getElementById('educational').style.color = "white";
    document.getElementById('basic').style.backgroundColor = "white";
    document.getElementById('basic').style.color = "#143551";
    document.getElementById("basic").style.border = "1px solid #143551";
    document.getElementById('additional').style.backgroundColor = "white";
    document.getElementById('additional').style.color = "#143551";  
    document.getElementById("additional").style.border = "1px solid #143551";
    document.getElementById('history').style.backgroundColor = "white";  
    document.getElementById('history').style.color = "#143551";  
    document.getElementById("history").style.border = "1px solid #143551";

    document.getElementById('details').innerHTML =
    '<table id="edu_det">' +
    '<tr>' +
    '<th> <b> Degree </b> </th>' +
    '<th> <b> CGPA / Percentage </b> </th>' +
    '<th> <b> Institute </b> </th>' +
    '<th> <b> Passing year </b> </th>' +
    '<th> <b> Board </b> </th>' +
    '<th> <b> Gap </b> </th>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> 10th </b> </td>' +
    '<td> ' + user.tenthpercent + '</td>' +
    '<td> ' + user.tenthschool + '</td>' +
    '<td> ' + user.tenthpassingyr + '</td>' +
    '<td> ' + user.tenthboard + '</td>' +
    '<td> ' + user.tenthgap + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> 12th </b> </td>' +
    '<td> ' + user.twelfthpercent + '</td>' +
    '<td> ' + user.twelfthschool + '</td>' +
    '<td> ' + user.twelfthpassingyr + '</td>' +
    '<td> ' + user.twelfthboard + '</td>' +
    '<td> ' + user.twelfthgap + '</td>' +
    '</tr>' +   
    '<tr>' +
    '<td> <b> B.tech </b> </td>' +
    '<td> ' + user.cgpa + '</td>' +
    '<td> ' + user.clg_name + '</td>' +
    '<td> ' + user.graduation_year + '</td>' +
    '<td> ' + "Private" + '</td>' +
    '<td> ' + "None" + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> PG </b> </td>' +
    '<td> ' + user.pgpercent + '</td>' +
    '<td> ' + user.pginstitute + '</td>' +
    '<td> ' + user.pgpassingyr + '</td>' +
    '<td> ' + "Not Available" + '</td>' +
    '<td> ' + user.pggap + '</td>' +
    '</tr>' +
    '<table>' +
    '<h2 style="margin:1rem"> B.tech </h2>' +
    '<table>' +
    '<tr>' +
    '<td> <b> Roll Number: </b> </td>' +
    '<td> ' + user.roll_number + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Course: </b> </td>' +
    '<td> ' + user.course + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> CGPA: </b> </td>' +
    '<td> ' + user.cgpa + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Graduation Year: </b> </td>' +
    '<td> ' + user.graduation_year + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Backlogs: </b> </td>' +
    '<td> ' + user.backlogs + '</td>' +
    '</tr>' +
    //backlogs
    '</table>' ;    
});

document.getElementById('additional').addEventListener('click', async function() {
    const Userdetails = doc(db, "users", uid);
    var usr = await getDoc(Userdetails);
    var user = usr.data();
    document.getElementById('additional').style.backgroundColor = "#143551";
    document.getElementById('additional').style.color = "white";
    document.getElementById('basic').style.backgroundColor = "white";
    document.getElementById('basic').style.color = "#143551";
    document.getElementById("basic").style.border = "1px solid #143551";
    document.getElementById('educational').style.backgroundColor = "white";
    document.getElementById('educational').style.color = "#143551";
    document.getElementById("educational").style.border = "1px solid #143551";
    document.getElementById('history').style.backgroundColor = "white";  
    document.getElementById('history').style.color = "#143551";  
    document.getElementById("history").style.border = "1px solid #143551";

    document.getElementById('details').innerHTML =
    '<table>' +
    '<tr>' +
    '<td> <b> Skills: </b> </td>' +
    '<td> ' + user.skills + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Github: </b> </td>' +
    '<td> <a style="color:white"href ="' + user.github_link + '" > Github  Profile </a></td>' +
    '</tr>' +   
    '<tr>' +
    '<td> <b> LinkedIn: </b> </td>' +
    '<td> <a style="color:white"href ="' + user.linkedin_link + '" > LinkedIn Profile </a></td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Prefered Coding Language: </b> </td>' +
    '<td> ' + user.pref_codingLang + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Work Experience: </b> </td>' +
    '<td> ' + user.workexp + '</td>' +
    '</tr>' +
    '<tr>' +    
    '<td> <b> Resume: </b> </td>' + 
    '<td> <a style="color:white"href ="' + user.resume_link + '" > Resume </a></td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> Awards: </b> </td>' +
    '<td> ' + user.awards + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> No of Offers in Hand: </b> </td>' +
    '<td> ' + user.no_of_offers + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td> <b> No of Drives Applied: </b> </td>' +
    '<td> ' + Object.keys(user.applied).length + '</td>' +
    '</tr>' +
    '</table>';
});

document.getElementById('history').addEventListener('click', async function() {
    const Userdetails = doc(db, "users", uid);
    var usr = await getDoc(Userdetails);
    var user = usr.data();
    document.getElementById('history').style.backgroundColor = "#143551";
    document.getElementById('history').style.color = "white";
    document.getElementById('basic').style.backgroundColor = "white";
    document.getElementById('basic').style.color = "#143551";
    document.getElementById("basic").style.border = "1px solid #143551";
    document.getElementById('educational').style.backgroundColor = "white";
    document.getElementById('educational').style.color = "#143551";
    document.getElementById("educational").style.border = "1px solid #143551";
    document.getElementById('additional').style.backgroundColor = "white";
    document.getElementById('additional').style.color = "#143551";  
    document.getElementById("additional").style.border = "1px solid #143551";

    var content = 
    '<table id="edu_det">' +
    '<tr>' +
    '<th> <b> Drive </b> </th>' +
    '<th> <b> Internship / Placement </b> </th>' +
    '<th> <b> Status </b> </th>' +
    '<th> <b> View Details </b> </th>' +
    '</tr>' ;
    ;
    for (var i in user.applied) {
        const drivedetails = doc(db, "drives", i);
        var drive = await getDoc(drivedetails);
        var drive = drive.data();
        content +=
        '<tr>' +
        '<td> ' + drive.title + '</td>' +
        '<td> ' + user.applied[i][0] + '</td>' +
        '<td> ' + user.applied[i][1] + '</td>' +
        `<td> <button onclick="window.location.href = '../student/drivepage.html?drive_id=${i}'"> View </button> </td>` +
        '</tr>' ;
    }
    content += '</table>';
    document.getElementById('details').innerHTML = content;
});

document.getElementById("basic").click();

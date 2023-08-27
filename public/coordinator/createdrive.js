import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, getDoc, doc, setDoc, updateDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

import {firebaseConfig} from "../config.js";

const uid = localStorage.getItem("userid");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function add_drive () {
    try{    
        var Roles = document.getElementById("roles").value.split(',')
        const driveSnap = await addDoc(collection(db, "drives"), {
            title: document.getElementById("drivename").value,
            start: document.getElementById("startdate").value,
            end: document.getElementById("enddate").value,
            roles: Roles,
            description: document.getElementById("description").value,
            applied: {},
        });
        const DriveId = driveSnap.id;
        var deadline = document.getElementById("deadline").value; 
        var deadl = {};
        deadl["start"] = deadline;
        const setdl = doc (db, "drives", "deadlines");
        const dl = await updateDoc(setdl, {
           [DriveId]: deadl,
        });
        const drive = doc(db, "drives", DriveId);
        var batches = [];
        if (document.getElementById("2024").checked) {
            batches.push(document.getElementById("2024").value);
        }
        if (document.getElementById("2025").checked) {
            batches.push(document.getElementById("2025").value);
        }
        if (document.getElementById("2026").checked) {
            batches.push(document.getElementById("2026").value);
        }
        var branches = [];
        if (document.getElementById("cse").checked) {
            branches.push(document.getElementById("cse").value);
        }
        if (document.getElementById("ece").checked) {
            branches.push(document.getElementById("ece").value);
        }
        if (document.getElementById("csy").checked) {
            branches.push(document.getElementById("csy").value);
        }
        if (document.getElementById("csd").checked) {
            branches.push(document.getElementById("csd").value);
        }
        if (document.getElementById("internship").checked) {
            await updateDoc(drive, {
                internship: true,
                ilocation: document.getElementById("ilocation").value,
                stipend: document.getElementById("stipend").value,
                iduration: document.getElementById("iduration").value,
                ibatches: batches,
            });
        }
        else {
            await updateDoc(drive, {
                internship: false,
                ilocation: "",
                stipend: "",
                iduration: "",
                ibatches: [],
            });
        }
        if (document.getElementById("placement").checked) {
            await updateDoc(drive, {
                placement: true,
                plocation: document.getElementById("plocation").value,
                CTC: document.getElementById("ctc").value,

            });
        }
        else {
            await updateDoc(drive, {
                placement: false,
            });
        }
        await updateDoc(drive, {
            branches: branches,
            min_cgpa: document.getElementById("cgpa").value,
        });
        var student_details = [];
        for (var i = 1; i < 32; i++) {
            var id = "det" + i; 
            if (document.getElementById(id).checked) {
                student_details.push(document.getElementById(id).value);
            }
        }
        await updateDoc(drive, {
            student_details: student_details,
        });
        alert("Drive created successfully");
        window.location.href = "dashboard.html";
    } catch (e) {
        alert(e);
    }
}

document.getElementById("submitdetails").addEventListener("click", async function () {
    try{
        await add_drive();
    } catch (e) {
        alert(e);
    }
});
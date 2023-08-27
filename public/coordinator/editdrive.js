import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, getDoc, doc, setDoc, updateDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import {firebaseConfig} from "../config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const urlParams = new URLSearchParams(window.location.search);
const drive_id = urlParams.get('drive_id');

document.addEventListener("DOMContentLoaded", async function() {
    try{
        const drive = doc(db, "drives", drive_id);
        const driveSnap = await getDoc(drive);
        const dl = doc(db, "drives", "deadlines");
        const dlSnap = await getDoc(dl);
        document.getElementById("deadline").value = dlSnap.data()[drive_id].start;
        document.getElementById("drivename").value = driveSnap.data().title;
        document.getElementById("startdate").value = driveSnap.data().start;
        document.getElementById("enddate").value = driveSnap.data().end;
        document.getElementById("description").value = driveSnap.data().description;
        document.getElementById("roles").value = driveSnap.data().roles;
        if (driveSnap.data().internship) {
            document.getElementById("internship").checked = true;
            document.getElementById("ilocation").value = driveSnap.data().ilocation;
            document.getElementById("stipend").value = driveSnap.data().stipend;
            document.getElementById("iduration").value = driveSnap.data().iduration;
            document.getElementById("2024").checked = driveSnap.data().ibatches.includes("2024");
            document.getElementById("2025").checked = driveSnap.data().ibatches.includes("2025");
            document.getElementById("2026").checked = driveSnap.data().ibatches.includes("2026");
        }
        document.getElementById("cgpa").value = driveSnap.data().min_cgpa;
        document.getElementById("cse").checked = driveSnap.data().branches.includes("cse");
        document.getElementById("ece").checked = driveSnap.data().branches.includes("ece");
        document.getElementById("csy").checked = driveSnap.data().branches.includes("csy");
        document.getElementById("csd").checked = driveSnap.data().branches.includes("csd");
        document.getElementById("placement").checked = driveSnap.data().placement;
        if (driveSnap.data().placement) {
            document.getElementById("plocation").value = driveSnap.data().plocation;
            document.getElementById("ctc").value = driveSnap.data().CTC;
        }
        for (var i = 1; i < 32; i++) {
            var id = "det" + i;
            if (driveSnap.data().student_details.includes(document.getElementById(id).value)) {
                document.getElementById(id).checked = true;
            }
        }
    } catch (e) {
        alert(e);
    }
});

async function add_drive () {
    try{    
        var deadline = document.getElementById("deadline").value; 
        var deadl = {};
        deadl["start"] = deadline;
        const setdl = doc (db, "drives", "deadlines");
        const dl = await updateDoc(setdl, {
           [drive_id]: deadl,
        });
        var Roles = document.getElementById("roles").value.split(',')
        const drive = doc(db, "drives", drive_id);
        const driveSnap = await updateDoc(drive, {
            title: document.getElementById("drivename").value,
            start: document.getElementById("startdate").value,
            end: document.getElementById("enddate").value,
            roles: Roles,
            description: document.getElementById("description").value,
            applied: {},
        });
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
        alert("Drive edited successfully");
        window.location.href = "dashboard.html";
    } catch (e) {
        console.error(e);
    }
}

document.getElementById("submitdetails").addEventListener("click", async function () {
    try{
        await add_drive();
    } catch (e) {
        alert(e);
    }
});
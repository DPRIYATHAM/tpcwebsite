import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, getDoc, doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

import {firebaseConfig} from "../config.js";

const uid = localStorage.getItem("userid");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function add_details() {
    try {
        if (document.getElementById("name").value == "") {
            alert("Name cannot be empty");
            return;
        }
        if (document.getElementById("pemail").value == "") {
            alert("Personal Email cannot be empty");
            return;
        }
        if (document.getElementById(phone_number).value == "") {    
            alert("Phone Number cannot be empty");
            return;
        }
        if (document.getElementById("address").value == "") {
            alert("Address cannot be empty");
            return;
        }
        if (document.getElementById("city").value == "") {
            alert("City cannot be empty");
            return;
        }
        if (document.getElementById("state").value == "") {
            alert("State cannot be empty");
            return;
        }
        if (document.getElementById("pincode").value == "") {
            alert("Pincode cannot be empty");
            return;
        }
        if (document.getElementById("roll").value == "") {
            alert("Roll Number cannot be empty");
            return;
        }
        const Userdetails = doc(db, "users", uid);
        const userSnap = await setDoc(Userdetails, {
            no_of_offers: "0",
            applied: {},
            name: document.getElementById("name").value,
            prsnl_email: document.getElementById("pemail").value,
            gender: document.getElementById("gender").value,
            dob: document.getElementById("dob").value,
            phone_number: document.getElementById("phone").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            pincode: document.getElementById("pincode").value,
            roll_number: document.getElementById("roll").value,
            degree: document.getElementById("degree").value,
            batch: document.getElementById("batch").value,
            graduation_year: String(parseInt(document.getElementById("batch").value) + 4),
            course: document.getElementById("course").value,
            cgpa: document.getElementById("cgpa").value,
            backlogs: document.getElementById("backlogs").value,
            tenthboard: document.getElementById("10board").value,
            tenthschool: document.getElementById("10school").value,
            tenthpercent: document.getElementById("10percent").value,
            tenthpassingyr: document.getElementById("10passingyr").value,
            tenthgap: document.getElementById("10gap").value,
            twelfthboard: document.getElementById("12board").value,
            twelfthschool: document.getElementById("12school").value,
            twelfthpercent: document.getElementById("12percent").value,
            twelfthpassingyr: document.getElementById("12passingyr").value,
            twelfthgap: document.getElementById("12gap").value,
            pgcourse: document.getElementById("pgcourse").value,
            pginstitute: document.getElementById("pginstitute").value,
            pgpercent: document.getElementById("pgpercent").value,
            pgpassingyr: document.getElementById("pgpassingyr").value,
            pggap: document.getElementById("pggap").value,
            workexp: document.getElementById("workexp").value,
            skills: document.getElementById("skills").value,
            pref_codingLang: document.getElementById("pref_codingLang").value,
            resume_link: document.getElementById("resume_link").value,
            linkedin_link: document.getElementById("linkedin_url").value,
            github_link: document.getElementById("github_url").value,
            awards: document.getElementById("awards").value,
        },
        { merge: true });
        const userdet = await updateDoc(Userdetails, {
            details: true,          
        });
    }
    catch (e) {
        console.error(e);
    }
}

document.getElementById("submitdetails").addEventListener("click", async function () {
    await add_details();
    alert("Details Submitted Successfully");
    window.location.href = "dashboard.html";
});

document.getElementById("close").addEventListener("click", async function () {
    window.location.href = "dashboard.html";
});
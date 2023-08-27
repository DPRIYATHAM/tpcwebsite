import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

import {firebaseConfig} from "../config.js";

const uid = localStorage.getItem("userid");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', async function() {
    try {
        const Userdetails = doc(db, "users", uid);
        const userdet = await getDoc(Userdetails);  
        document.getElementById("name").value = userdet.data().name;
        document.getElementById("pemail").value = userdet.data().prsnl_email;
        document.getElementById("gender").value = userdet.data().gender;
        document.getElementById("dob").value = userdet.data().dob;
        document.getElementById("phone").value = userdet.data().phone_number;
        document.getElementById("address").value = userdet.data().address;
        document.getElementById("city").value = userdet.data().city;
        document.getElementById("state").value = userdet.data().state;
        document.getElementById("pincode").value = userdet.data().pincode;
        document.getElementById("roll").value = userdet.data().roll_number;
        document.getElementById("degree").value = userdet.data().degree;
        document.getElementById("batch").value = userdet.data().batch;
        document.getElementById("course").value = userdet.data().course;
        document.getElementById("cgpa").value = userdet.data().cgpa;
        document.getElementById("backlogs").value = userdet.data().backlogs;
        document.getElementById("10board").value = userdet.data().tenthboard;
        document.getElementById("10school").value = userdet.data().tenthschool;
        document.getElementById("10percent").value = userdet.data().tenthpercent;
        document.getElementById("10passingyr").value = userdet.data().tenthpassingyr;
        document.getElementById("10gap").value = userdet.data().tenthgap;
        document.getElementById("12board").value = userdet.data().twelfthboard;
        document.getElementById("12school").value = userdet.data().twelfthschool;
        document.getElementById("12percent").value = userdet.data().twelfthpercent;
        document.getElementById("12passingyr").value = userdet.data().twelfthpassingyr;
        document.getElementById("12gap").value = userdet.data().twelfthgap;
        document.getElementById("pgcourse").value = userdet.data().pgcourse;
        document.getElementById("pginstitute").value = userdet.data().pginstitute;
        document.getElementById("pgpercent").value = userdet.data().pgpercent;
        document.getElementById("pgpassingyr").value = userdet.data().pgpassingyr;
        document.getElementById("pggap").value = userdet.data().pggap;
        document.getElementById("workexp").value = userdet.data().workexp;
        document.getElementById("skills").value = userdet.data().skills;
        document.getElementById("pref_codingLang").value = userdet.data().pref_codingLang;
        document.getElementById("resume_link").value = userdet.data().resume_link;
        document.getElementById("linkedin_url").value = userdet.data().linkedin_link;
        document.getElementById("github_url").value = userdet.data().github_link;
        document.getElementById("awards").value = userdet.data().awards;
    }
    catch (e) {
        alert(e);
    }
});

async function add_details() {
    try {
        const Userdetails = doc(db, "users", uid);
        const userSnap = await updateDoc(Userdetails, {
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
        });
    }
    catch (e) {
        console.error(e);
    }
}

document.getElementById("submitdetails").addEventListener("click", async function () {
    await add_details();
    alert("Details Updated Successfully");
    window.location.href = "profile.html";
});

document.getElementById("close").addEventListener("click", async function () {
    window.location.href = "profile.html";
});
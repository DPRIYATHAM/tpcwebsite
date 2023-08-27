import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import {firebaseConfig} from "./config.js";

const uid = localStorage.getItem("userid");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", async function() {
    const Userdetails = doc(db, "users", uid);
    const userdet = await getDoc(Userdetails);
    const role = userdet.data().role;
    console.log("Called Permission.js", role);
    if (role !== "coordinator") {
      window.location.assign('../404.html')
    }
});
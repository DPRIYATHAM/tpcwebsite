// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup #available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification
    } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

import {firebaseConfig} from "./config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
var uid = "";
var user_role = "";

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
    hd: 'iiitkottayam.ac.in'
});

document.getElementById("google").addEventListener("click", function (e) {
    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // Checking if user is from iiitkottayam.ac.in domain
    const user = result.user;
    var domain = auth.currentUser.email.split('@')[1];
    if (domain != "iiitkottayam.ac.in") {
        user.delete();
        alert("Please use your college email id");
        return;
    }
    uid = user.uid;
    localStorage.setItem("userid", uid);
    // check whether user is already registered or not
    const docRef = doc(db, "users", uid);
    getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
            SignedIn(uid);
        }
        else {
            // add user to database
            setDoc(doc(db, "users", uid), {
                clg_email: user.email,
                clg_name: "IIIT Kottayam",
                role: "student",
                details: false,
            })
            .then(() => {
                window.location.href = "student/registration.html";
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
    });
  }).catch((error) => {
    alert(error);
  });
});

document.getElementById("login").addEventListener("click", function () {
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.emailVerified == true || email == "placement@iiitkottayam.ac.in") {
            SignedIn(user.uid);      
        }
        else {
            alert("Please verify your email");
        }
    })
    .catch((error) => {
        alert(error);
    });
});

async function SignedIn(uuid) {
    try {
        const docRef = doc(db, "users", uuid);
        const docSnap = await getDoc(docRef);
        user_role = docSnap.data().role;
        localStorage.setItem("userid", uuid);
        if (user_role == "student") {
            if (docSnap.data().details == true ){
                window.location.href = "student/dashboard.html";
            }
            else {
                window.location.href = "student/registration.html";
            }
        }
        else if (user_role == "coordinator") {
            window.location.href = "coordinator/dashboard.html";
        }
    } 
    catch (e) { 
      console.error(e);
    }
}

document.getElementById("signup").addEventListener("click", async function() {
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;
    var domain = email.split('@')[1];
    if (domain == "iiitkottayam.ac.in") {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            uid = user.uid;
            sendEmailVerification(user)
            .then(() => {
                alert('Verification Email Sent Successfully!');
                setDoc(doc(db, "users", uid), {
                    clg_email: user.email,
                    role: "student",
                    details: false,
                })
            })
            .catch(error => {
                alert(error);
            })
        })
        .catch(error => {
            alert(error);
        })
    } else{
        alert("Please use College Mail'Id")
    }
});

document.getElementById("resetPassword").addEventListener("click", function (e) {
    var email = document.getElementById("login_email").value;
    document.getElementById("login_password").style.display = 'none';
    document.getElementById("lock").style.display = 'none';
    document.getElementById("login").style.display = 'none';
    document.getElementById("google").style.display = 'none';
    document.getElementById("signup").style.display = 'none';
    document.getElementById("resetPassword").style.marginLeft = "25%";
    console.log(e);
    sendPasswordResetEmail(auth, email)
    .then(() => {
        document.getElementById("top_msg").innerHTML = 'Reset-Link Sent';
    })
    .catch(error => {
        alert(error);
    })
});
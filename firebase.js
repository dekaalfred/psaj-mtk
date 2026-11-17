
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
    import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
    import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

    window.firebaseModules = {
      initializeApp, getAuth, signInWithPopup, GoogleAuthProvider,
      createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,
      getFirestore, doc, setDoc, getDoc
    };
    if (window.initGame) window.initGame();
  
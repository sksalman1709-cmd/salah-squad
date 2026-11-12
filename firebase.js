import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Add your Firebase web config in .env (see README). Leave blank for local-only mode.
const config={apiKey:import.meta.env.VITE_FIREBASE_API_KEY,authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,appId:import.meta.env.VITE_FIREBASE_APP_ID};
export const firebaseReady=!!(config.apiKey&&config.projectId&&config.appId);
export const auth=firebaseReady?getAuth(initializeApp(config)):null;
export const db=firebaseReady?getFirestore():null;
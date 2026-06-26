import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "gen-lang-client-0020085834",
  appId: "1:50187488437:web:d7a0d03dacf2f10db982fc",
  apiKey: "AIzaSyAMsBSLfE9QBdITrOSzKEi4W4Hb7hMEthY",
  authDomain: "gen-lang-client-0020085834.firebaseapp.com",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, "ai-studio-1bffa8b5-6763-4bb5-a1a6-30ebd1057631");

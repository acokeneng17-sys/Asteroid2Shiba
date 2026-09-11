import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBR5-A-DtqMiiP_ZUodMt_pXEymhIWj9w",
  authDomain: "ast2database.firebaseapp.com",
  databaseURL: "https://ast2database-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "ast2database",
  storageBucket: "ast2database.firebasestorage.app",
  messagingSenderId: "355604889431",
  appId: "1:355604889431:web:20690585be84fc66f50812"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export function simpanData(userId, data) {
  return set(ref(db, 'users/' + userId), data);
}

export async function bacaData(userId) {
  const snapshot = await get(ref(db, 'users/' + userId));
  return snapshot.exists() ? snapshot.val() : null;
}

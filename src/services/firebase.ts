import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

enum Collections {
  PARCEL = 'parcel',
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export async function auth() {
  return firebase.auth().signInAnonymously();
}

export async function createParcelRecord(values: any) {
  return db.collection(Collections.PARCEL).add({
    created: firebase.firestore.FieldValue.serverTimestamp(),
    values,
  });
}

export async function getParcelRecords() {
  const snapshot = await db.collection(Collections.PARCEL).get();
  return snapshot.docs
    .map((doc) => doc.data())
    .map((data) => {
      const { values, created } = data;
      const { barcode } = values;
      const { seconds } = created;
      return { barcode, date: new Date(seconds * 1000).toISOString() };
    });
}

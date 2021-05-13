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
    .map((res) => {
      const doc: firebase.firestore.DocumentData = res.data();
      const { id } = res;
      return { doc, id };
    })
    .map((data) => {
      const { id, doc } = data;
      const { values, created } = doc;
      const { barcode } = values;
      const { seconds } = created;
      return { id, barcode, date: new Date(seconds * 1000).toISOString() };
    });
}

export async function deleteParcelRecords(id: string) {
  await db.collection(Collections.PARCEL).doc(id).delete();
}

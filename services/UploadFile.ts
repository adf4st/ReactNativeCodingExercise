// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getStorage, ref, uploadBytes} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA1-wWMxHQsq4QSwOgux4X4WNBaHAj2JnY',
  authDomain: 'reactnativecodingexercise.firebaseapp.com',
  projectId: 'reactnativecodingexercise',
  storageBucket: 'reactnativecodingexercise.appspot.com',
  messagingSenderId: '526796768088',
  appId: '1:526796768088:web:93d2ef71c2de74e29e5b2d',
  measurementId: 'G-W5EP4L8RM7',
};

const storage = getStorage(initializeApp(firebaseConfig));

export default function UploadFile(dataBlob: Blob, filename: string) {
  const fileRef = ref(storage, `images/${filename}`);
  uploadBytes(fileRef, dataBlob).then(snapshot => {
    console.log('uploaded the file ' + filename);
    console.log('uploaded status ' + snapshot.metadata);
  });
}

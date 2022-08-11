
import { initializeApp } from "firebase/app";
import{ getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsPvlMd5CjVJrUMgePsF7hOQn20T_IB2Y",
  authDomain: "image-uplaod-456af.firebaseapp.com",
  projectId: "image-uplaod-456af",
  storageBucket: "image-uplaod-456af.appspot.com",
  messagingSenderId: "63036459681",
  appId: "1:63036459681:web:b99f51d91a08b5709b7ee0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage =getStorage(app)
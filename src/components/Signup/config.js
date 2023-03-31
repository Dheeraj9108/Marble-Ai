import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // apiKey: "AIzaSyBC2YyLm67DtXCF0R1blje1--8DnwbRJ_o",
  // authDomain: "test-project-93912.firebaseapp.com",
  // projectId: "test-project-93912",
  // storageBucket: "test-project-93912.appspot.com",
  // messagingSenderId: "608199748696",
  // appId: "1:608199748696:web:7f4953c16587da707fee2d",
  // measurementId: "G-Y4SMPBH0HL"
  apiKey: "AIzaSyBJgB3XaUi2nOEo8UEJw0D_LuAkcvghFXU",
  authDomain: "test2-2970b.firebaseapp.com",
  databaseURL:"https://test2-2970b.firebaseio.com",
  projectId: "test2-2970b",
  storageBucket: "test2-2970b.appspot.com",
  messagingSenderId: "162603241271",
  appId: "1:162603241271:web:a479f57351bbed76db54b2",
  measurementId: "G-3CL63GWPDC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
export {auth,provider,analytics};
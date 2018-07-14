import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const config = {
		apiKey: "AIzaSyAVyJQ1-Yio82p1idy3CetJsy7t1RNHQ3o",
		authDomain: "vue-pwa-5d30a.firebaseapp.com",
		databaseURL: "https://vue-pwa-5d30a.firebaseio.com",
		projectId: "vue-pwa-5d30a",
		storageBucket: "",
		messagingSenderId: "214505594311"
}
firebase.initializeApp(config)

export default firebase;


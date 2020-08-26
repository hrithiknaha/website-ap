import * as firebase from 'firebase';

import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyAbd2KCuFE9gBgzfRLPnJxqxjIFTO6e4dU',
	authDomain: 'website-ap-f62b6.firebaseapp.com',
	databaseURL: 'https://website-ap-f62b6.firebaseio.com',
	projectId: 'website-ap-f62b6',
	storageBucket: 'website-ap-f62b6.appspot.com',
	messagingSenderId: '140867126427',
	appId: '1:140867126427:web:5a5b5173456df4eaa4323e',
	measurementId: 'G-V9420TWY0T'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectFirestore = firebase.firestore();

export { projectFirestore };

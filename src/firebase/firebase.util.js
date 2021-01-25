import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBznhzyrAjDwv6SDAsgzvrWD796qKrcwfo',
	authDomain: 'crown-db-d7137.firebaseapp.com',
	projectId: 'crown-db-d7137',
	storageBucket: 'crown-db-d7137.appspot.com',
	messagingSenderId: '315118614445',
	appId: '1:315118614445:web:eadec82c53595bc7c5d324',
	measurementId: 'G-MEYQC9E8MJ'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
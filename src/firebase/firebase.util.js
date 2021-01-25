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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

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
	// userAuth => جايبها من الرياكت اللي جايباها من الداتا بيز

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


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	const batch = firestore.batch();
	// batch عبارة عن كل المجموعات تاعتنا
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		//  عشوائي من الداتابيز نفسها id هيك بضيف لكل عنصر
		// .doc(obj.title) هيك بضيف لكل عنصر اي دي هو العنوان تاع الكائن
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
	// .commit();  =>  batch بترسل ال 
}

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
	const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
		const { title, items } = docSnapshot.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: docSnapshot.id,
			title,
			items
		};
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {})
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject)
	})
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

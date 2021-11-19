import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
   apiKey: "AIzaSyBMNYm5UYQmj1b4iHgVW77DLPazN4nV1lk",
   authDomain: "marketplace-141e0.firebaseapp.com",
   projectId: "marketplace-141e0",
   storageBucket: "marketplace-141e0.appspot.com",
   messagingSenderId: "786217591918",
   appId: "1:786217591918:web:73d501a430ee0d0fa1b27f"
});

export const auth = getAuth(firebaseApp);

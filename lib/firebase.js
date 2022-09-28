import admin from "firebase-admin"
const serviceAccount = JSON.parse(
    process.env.NEXT_PUBLIC_FIREBASE_KEY
);

try{
    admin.initializeApp(
    {
        credential: admin.credential.cert(serviceAccount),
        databaseURL: process.env.NEXT_PUBLIC_FIRBASE_URL
    }
);
}catch(err){
    console.log("firbase err", err.stack)
}

export default admin.firestore();
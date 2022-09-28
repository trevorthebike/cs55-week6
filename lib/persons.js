//library for firestore kinda

import firebase from "./firebase";

export async function getResourcesIds(){
    let output = [];
    try {
        const snapshot = await firebase.collection("persons").get();
        snapshot.forEach(
            (doc) => {
                output.push(
                    {
                        params: {
                            id:doc.id
                        }
                    }
                );
            }
        )
    }catch(error){
        console.log(error);
        console.error(error);
    }
    return output;
}

export async function getResourcesData(idRequested){
    const doc = await firebase.collection("persons").doc(idRequested).get();
    let output;
    if(!doc.empty){
        output = {id:doc.id, data:doc.data()};
    }
    else{
        output = null;
    }
    return output;
}
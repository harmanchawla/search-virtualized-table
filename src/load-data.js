import firebase from './firebase-config';

function intialLoad() {
    const db = firebase.firestore();
    const dataRef = db.collection('dummyPeople');
    const firstQuery = dataRef.limit(1000);
    return getDataFromQuery(firstQuery);
}

function loadDataFromOffset(lastVisible) {
    const db = firebase.firestore();
    const dataRef = db.collection('dummyPeople');
    const query = dataRef.startAfter(lastVisible).limit(1000);
    return getDataFromQuery(query);
}

function getDataFromQuery(query) {
    let data = [];
    let lastVisible = null;
    await query.get().then((documentSnapshots) => {
        documentSnapshots.forEach((doc) => {
            data.push(doc.data());
        });
        lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    });
    return data;
}
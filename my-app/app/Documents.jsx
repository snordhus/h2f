'use client';
import { db } from './firebase.js'
import { doc, getDocs, collection } from "firebase/firestore"
import Button from 'react-bootstrap/Button'

const Documents = () => {
    const readData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "documents"));
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          });
            alert('Data was successfully fetched from cloud firestore! Close this alert and check console for output.')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <div style={{ margin: '5px 0' }}>
            <Button onClick={readData} style={{ width: '100%' }}>Read Data From Cloud Firestore</Button>
        </div>
    )
}

export default Documents

'use client';
import { db } from './firebase.js'
import { doc, getDocs, collection } from "firebase/firestore"
import Button from 'react-bootstrap/Button'

const Documents = async () => {
    const docs = [];
    //const readData = async () => {
        //try {
          const querySnapshot = await getDocs(collection(db, "documents"));
          
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            docs.push(doc);
            
          });
            //alert('Data was successfully fetched from cloud firestore! Close this alert and check console for output.')
        //} 
        //catch (error) {
            // console.log(error)
            // alert(error)
        //}
    //}

    return (
        <div>
      <ul>
        {docs.map((doc) => (
          <li key={doc.id} className="mb-8">
            
            <a className="text-2xl bg-blue-500 hover:bg-red-500" href={doc.data().url} target="_blank" rel="noreferrer noopener">
            {doc.data().title}</a>
        <div className="pl-8">
        <h4>Subdomain: {doc.data().subdomain}</h4>
        <h4>Keywords: {doc.data().keywords.join(', ')}</h4>
          <h4>Synopsis:</h4>
          <p className="pl-8">{doc.data().summary}</p>
          <p>Contact a Specialist:</p>
        </div>
            </li>
            
        ))}
      </ul>
    </div>
    )
}

export default Documents

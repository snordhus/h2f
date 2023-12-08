'use client';
import { useState, useEffect } from 'react';
import { db } from './firebase.js';
import { getDocs, collection } from 'firebase/firestore';

const Documents = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'documents'));

        const newDocs = [];
        querySnapshot.forEach((doc) => {
          newDocs.push(doc);
        });

        setDocs(newDocs);
      } catch (error) {
        console.error(error);
        // Handle error as needed
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <ul>
        {docs.map((doc) => (
          <li key={doc.id} className="mb-8">
            <a
              className="text-2xl bg-blue-500 hover:bg-red-500"
              href={doc.data().url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {doc.data().title}
            </a>
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
  );
};

export default Documents;

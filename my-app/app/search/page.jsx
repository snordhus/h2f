'use client'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { db } from './../firebase';
import { getDocs, collection } from "firebase/firestore";

const Page = () => {
  const [docs, setDocs] = useState([]);
  const [q, setQ] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const searchQuery = searchParams.get('search');
      setQ(searchQuery);

      const querySnapshot = await getDocs(collection(db, "documents"));
      const filteredDocs = [];

      querySnapshot.forEach((doc) => {
        if (doc.data().keywords.includes(searchQuery)) {
          filteredDocs.push(doc);
        }
      });

      setDocs(filteredDocs);
    };

    fetchData();
  }, [searchParams]);

  return (
    <div>
      <h1>Search Results</h1>
      <p>You searched for: {q}</p>
      <br />
      <ul>
        {docs.map((doc) => (
          <li key={doc.id} className="mb-8">
            <a className="text-2xl bg-blue-500 hover:bg-red-500" href={doc.data().url} target="_blank" rel="noreferrer noopener">
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

export default Page;

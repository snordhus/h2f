"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { db } from "./../firebase";
import { Text } from "@chakra-ui/react";
import { getDocs, collection } from "firebase/firestore";
import "./search.css";

const Page = () => {
  const [docs, setDocs] = useState([]);
  const [q, setQ] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const searchQuery = searchParams.get("search");
      const lowercaseSearchQuery = searchQuery.toLowerCase();
      setQ(lowercaseSearchQuery);

      const querySnapshot = await getDocs(collection(db, "documents"));
      const filteredDocs = [];

      querySnapshot.forEach((doc) => {
        if (doc.data().keywords.includes(lowercaseSearchQuery)) {
          filteredDocs.push(doc);
        }
      });

      setDocs(filteredDocs);
    };

    fetchData();
  }, [searchParams]);

  return (
    <div className="search-parent">
      <Text fontSize="xxx-large" className="search-header">
        Search Results
      </Text>
      <p>You searched for: {q}</p>
      <br />
      <ul>
        {docs.map((doc) => (
          <li key={doc.id} className="mb-8">
            <a
              className="text-2xl"
              href={doc.data().url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {doc.data().title}
            </a>
            <div className="pl-8">
              <h4>Subdomain: {doc.data().subdomain}</h4>
              <h4>Keywords: {doc.data().keywords.join(", ")}</h4>
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

"use client";
import { db } from "../firebase.js";
import { doc, getDocs, collection } from "firebase/firestore";
import { Text } from "@chakra-ui/react";
import Link from "next/link.js";
import "./documents.css";

const Documents = async ({ domain }) => {
  let all = false;
  if (domain == "") {
    all = true;
  }
  const docs = [];
  const querySnapshot = await getDocs(collection(db, "documents"));
  querySnapshot.forEach((doc) => {
    const subdomain = doc.data().subdomain.toLowerCase();
    console.log(doc);
    if (all) {
      docs.push(doc);
    } else if (subdomain == domain) {
      docs.push(doc);
    }
  });

  return (
    <div className="documents-parent-container">
      <Text fontSize="xx-large" className="documents-header">
        Resources for the {domain} Pillar
      </Text>
      <div className="documents-parent">
        <div className="documents">
          {docs.map((doc) => (
            <Link href={doc.data().url} target="_blank">
              <div key={doc.id} className="documents-item">
                <Text fontSize="medium" className="documents-item-title">
                  {doc.data().title}
                </Text>
                <Text
                  fontSize="small"
                  noOfLines={3}
                  className="documents-item-summary"
                >
                  {doc.data().summary}
                </Text>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;

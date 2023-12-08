import { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { Text } from "@chakra-ui/react";
import Link from "next/link.js";
import "./documents.css";

const Documents = ({ domain }) => {
  const [docs, setDocs] = useState([]);
  const [all, setAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (domain === "all") {
        setAll(true);
      }

      const querySnapshot = await getDocs(collection(db, "documents"));
      const newDocs = [];
      querySnapshot.forEach((doc) => {
        const subdomain = doc.data().subdomain.toLowerCase();
        if (all || subdomain === domain) {
          newDocs.push(doc);
        }
      });
      setDocs(newDocs);
    };

    fetchData();
  }, [domain, all]);

  return (
    <div className="documents-parent-container">
      {all === true ? (
        <Text fontSize="xx-large" className="documents-header">
          Resources for all domains of H2F
        </Text>
      ) : (
        <Text fontSize="xx-large" className="documents-header">
          Document resources for the {domain} pillar
        </Text>
      )}
      <div className="documents-parent">
        <div className="documents">
          {docs.map((doc) => (
            <Link key={doc.id} href={doc.data().url} target="_blank">
              <div className="documents-item">
                <Text
                  fontSize="medium"
                  className="documents-item-title"
                  noOfLines={1.5}
                >
                  {doc.data().title}
                </Text>
                <Text
                  fontSize="small"
                  noOfLines={7}
                  className="documents-item-summary"
                >
                  {doc.data().summary}
                </Text>
              </div>
            </Link>
          ))}
          {docs.length <= 3 ? (
            <>
              <div className="documents-item-hidden">
                <Text
                  fontSize="medium"
                  className="documents-item-title-hidden"
                  noOfLines={2}
                >
                  Empty
                </Text>
                <Text
                  fontSize="small"
                  noOfLines={7}
                  className="documents-item-summary"
                >
                  Empty
                </Text>
              </div>
              <div className="documents-item-hidden">
                <Text
                  fontSize="medium"
                  className="documents-item-title-hidden"
                  noOfLines={2}
                >
                  Empty
                </Text>
                <Text
                  fontSize="small"
                  noOfLines={7}
                  className="documents-item-summary"
                >
                  Empty
                </Text>
              </div>
              <div className="documents-item-hidden">
                <Text
                  fontSize="medium"
                  className="documents-item-title-hidden"
                  noOfLines={2}
                >
                  Empty
                </Text>
                <Text
                  fontSize="small"
                  noOfLines={7}
                  className="documents-item-summary"
                >
                  Empty
                </Text>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Documents;

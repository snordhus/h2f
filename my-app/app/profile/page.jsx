"use client";
import React, { useEffect, useState } from "react";
import { Input, Select } from "@chakra-ui/react";
import { UserAuth } from "../components/context/AuthContext";
import Spinner from "../components/Spinner";
import { db } from "../firebase";
import { doc, getDocs, collection, addDoc } from "firebase/firestore";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  Form,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import "./profile.css";

const Page = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const fields = [
    {
      name: "title",
      label: "Title",
      placeholder: "Enter title",
      labelwidth: "20%",
      width: "30%",
    },
    { name: "subdomain", label: "Subdomain", labelwidth: "20%", width: "30%" },
    {
      name: "keyword",
      label: 'Keywords (seaparate each by a comma and space: ", ")',
      placeholder: "Enter keywords...  ex: (word1, word2, word3)",
      labelwidth: "20%",
      width: "30%",
    },
    {
      name: "summary",
      label: "Summary",
      placeholder: "Enter a short summary for the document",
      labelwidth: "20%",
      width: "80%",
    },
    {
      name: "url",
      label: "url",
      placeholder: "Paste the website link/url for the document",
      labelwidth: "20%",
      width: "80%",
    },
    // Add more fields as needed
  ];
  const [emailFormData, setEmailFormData] = useState("");
  const inputStyle = {
    width: "35%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    color: "black", // Set the text color to black
  };
  const labelStyle = {
    width: "80px", // Set the width of the label (e.g., 80px)
  };

  // Define the options for the "subdomain" dropdown
  const subdomainOptions = [
    "Physical",
    "Mental",
    "Nutrition",
    "Sleep",
    "Spiritual",
  ];

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const initialState = {};
  fields.forEach((field) => {
    if (field.name !== "subdomain") {
      initialState[field.name] = "";
    } else {
      initialState[field.name] = "Physical";
    }
  });

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e, fieldName) => {
    const updatedFormData = { ...formData, [fieldName]: e.target.value };
    setFormData(updatedFormData);
  };
  const handleDropdownChange = (e) => {
    const updatedFormData = { ...formData, subdomain: e.target.value };
    setFormData(updatedFormData);
  };

  //form to add an additional authorized user
  const handleEmailInputChange = (e) => {
    setEmailFormData(e.target.value);
  };
  const handleEmailFormSubmit = async () => {
    console.log("Email Input:", emailFormData);
    const docRef = await addDoc(collection(db, "authorizedUsers"), {
      email: emailFormData,
    });
    console.log("Email written with ID: ", docRef.id);
    alert("New authorized user: " + emailFormData + " successfully added");
    setEmailFormData("");
    // You can add additional logic here if needed
  };

  let authorizedUsers = [];
  const Documents = async () => {
    //const readData = async () => {
    //try {

    if (!user) return;
    const querySnapshot = await getDocs(collection(db, "authorizedUsers"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      authorizedUsers.push(doc.data().email);
      console.log(doc.data().email + " " + user.email);
      if (user.email == doc.data().email) {
        setIsAuth(true);
        console.log(isAuth);
      }
    });

    //}
  };

  const handleFormSubmit = async () => {
    const data = {};

    fields.forEach((field) => {
      console.log(field.name);
      console.log(formData[field.name]);
      data[field.name] = formData[field.name];
    });
    console.log(data);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "documents"), {
      title: data["title"],
      summary: data["summary"],
      subdomain: data["subdomain"], // Use the selected value from the dropdown
      keywords: data["keyword"].toLowerCase().split(", "),
      url: data["url"],
      author: user.displayName, // You can use user.displayName if needed
      // user.displayName
    });
    console.log("Document written with ID: ", docRef.id);
    alert("Document written to database successfully!");
    setFormData(initialState);
  };
  Documents();

  const getOldProfile = () => {
    return (
      <div className="p-4">
        {loading ? (
          <Spinner />
        ) : user ? (
          <div>
            {isAuth ? (
              <p>{user.email} is an authorized email</p>
            ) : (
              <p>{user.email} is not an authorized email</p>
            )}
            <p>
              Welcome, {user.displayName} - {user.email} - you are logged in to
              the profile page - a protected route.
            </p>
            <div className="space-y-4">
              {fields.map((field, index) => (
                <div className="mb-4" key={index}>
                  <div className="flex">
                    <label
                      htmlFor={field.name}
                      className="pr-2"
                      style={{ width: field.labelwidth }}
                    >
                      {field.label}:
                    </label>
                    {field.name === "subdomain" ? (
                      <Select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleDropdownChange}
                        style={{
                          width: field.width,
                          padding: "8px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          color: "black",
                        }}
                      >
                        {subdomainOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                            style={{ color: "black" }}
                          >
                            {option}
                          </option>
                        ))}
                      </Select>
                    ) : (
                      <Input
                        type="text"
                        id={field.name}
                        value={formData[field.name]}
                        onChange={(e) => handleInputChange(e, field.name)}
                        placeholder={field.placeholder}
                        style={{
                          width: field.width,
                          padding: "8px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          color: "black",
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
              <button
                onClick={handleFormSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Add Document
              </button>

              {/* Second Form for Email */}
              <p>Add Authorized User:</p>
              <form>
                <div className="mb-4">
                  <div className="flex">
                    <label
                      htmlFor="emailInput"
                      className="pr-2"
                      style={{ width: "80px" }}
                    >
                      Email:
                    </label>
                    <Input
                      type="email"
                      id="emailInput"
                      value={emailFormData}
                      onChange={handleEmailInputChange}
                      placeholder="Enter email"
                      color="black"
                      variant="unstyled"
                      colorScheme="blue"
                      isRequired
                      style={{
                        width: "30%",
                        padding: "8px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleEmailFormSubmit}
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                  Log Email
                </button>
              </form>
            </div>
          </div>
        ) : (
          <p>You must be logged in to view this page - protected route.</p>
        )}
      </div>
    );
  };

  const getAccordian = () => {
    return (
      <Accordion allowToggle className="accord">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="center" className="box-header">
                Account Information
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {!user ? (
              <Text fontSize="md" color="black" className="menu-text">
                Please log in
              </Text>
            ) : (
              <>
                <Text fontSize="md" color="black" className="menu-text">
                  Welcome, {user.displayName}
                </Text>
                <br></br>
                <Text fontSize="md" color="black" className="menu-text">
                  You are logged in to the profile page - a protected route.
                </Text>
                <br></br>
                <Text fontSize="md" color="black" className="menu-text">
                  Email: {user.email}
                </Text>
                <br></br>
                {isAuth ? (
                  <Text fontSize="md" color="black" className="menu-text">
                    You are an authorized user. You can add documents
                  </Text>
                ) : (
                  <Text fontSize="md" color="black" className="menu-text">
                    You are not an authorized user, and can not add documents.
                    If this is wrong, please contact brian.r.harder.mil@army.mil
                    to change this
                  </Text>
                )}
              </>
            )}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="center" className="box-header">
                Add Documents
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <form>
              <FormControl isRequired>
                <FormLabel>Document Title</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Subdomain</FormLabel>
                <Select>
                  <option value="physical">Physical</option>
                  <option value="mental">Mental</option>
                  <option value="nutrition">Nutrition</option>
                  <option value="sleep">Sleep</option>
                  <option value="spiritual">Spiritual</option>
                </Select>
              </FormControl>
            </form>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="center" className="box-header">
                Add Authorized User
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {isAuth ? (
              <Text fontSize="md" color="black" className="menu-text">
                You are an authorized user. You can add authorized users
              </Text>
            ) : (
              <Text fontSize="md" color="black" className="menu-text">
                You are not an authorized user, and can not add authorized
                users. If this is wrong, please contact
                brian.r.harder.mil@army.mil to change this
              </Text>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  };

  return (
    <div className="add-document-parent">
      <Text fontSize="xxx-large" className="add-header">
        Account Page
      </Text>
      {/* {getOldProfile()} */}
      <div className="box">{getAccordian()}</div>
    </div>
  );
};

export default Page;

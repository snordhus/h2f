"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../components/context/AuthContext";
import Spinner from "../components/Spinner";
import { db } from '../firebase'
import { doc, getDocs, collection, addDoc } from "firebase/firestore"

const Page = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const fields = [
    { name: 'title', label: 'Title', placeholder: 'Enter title', labelwidth:"20%", width: '30%' },
    { name: 'subdomain', label: 'Subdomain', labelwidth: "20%", width: '30%' },
    { name: 'keyword', label: 'Keyword', placeholder: 'Enter keyword', labelwidth:"20%", width: '30%' },
    { name: 'summary', label: 'Summary', placeholder: 'Enter a short summary for the document', labelwidth:"20%", width: '80%' },
    { name: 'url', label: 'url', placeholder: 'Paste the website link/url for the document', labelwidth:"20%", width: '80%' },
    // Add more fields as needed
  ];
  const [emailFormData, setEmailFormData] = useState('');
  const inputStyle = {
    width: '35%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    color: 'black', // Set the text color to black
  };
  const labelStyle = {
    width: '80px', // Set the width of the label (e.g., 80px)
  };

   // Define the options for the "subdomain" dropdown
   const subdomainOptions = ['Physical', 'Mental', 'Nutrition', 'Sleep', 'Spiritual'];


  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const initialState = {};
  fields.forEach((field) => {
    initialState[field.name] = '';
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
  const handleEmailFormSubmit = () => {
    console.log("Email Input:", emailFormData);
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
            if(user.email == doc.data().email){
              
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
      title: data['title'],
      summary: data['summary'],
      subdomain: data['subdomain'], // Use the selected value from the dropdown
      keywords: data['keyword'],
      url: data['url'],
      author: user.displayName, // You can use user.displayName if needed
      // user.displayName
    });
    console.log("Document written with ID: ", docRef.id);
    alert("Document written to database successfully!");
    setFormData(initialState);

  }
  Documents();



  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : user ? (
        <div>

          { isAuth ? (<p>{user.email} is an authorized email</p>):(<p>{user.email} is not an authorized email</p>)}
        <p>
          Welcome, {user.displayName} - {user.email} - you are logged in to the profile page -
          a protected route.
        </p>
        <div className="space-y-4">
      {fields.map((field, index) => (
        <div className="mb-4" key={index}>
          <div className="flex">
            <label htmlFor={field.name} className="pr-2" style={{ width: field.labelwidth }}>
              {field.label}:
            </label>
            {field.name === 'subdomain' ? (
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleDropdownChange}
                      style={{
                        width: field.width,
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        color: 'black',
                      }}
                    >
                      {subdomainOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      id={field.name}
                      value={formData[field.name]}
                      onChange={(e) => handleInputChange(e, field.name)}
                      placeholder={field.placeholder}
                      style={{
                        width: field.width,
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        color: 'black',
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
            <label htmlFor="emailInput" className="pr-2" style={{ width: '80px' }}>
              Email:
            </label>
            <input
              type="email"
              id="emailInput"
              value={emailFormData}
              onChange={handleEmailInputChange}
              placeholder="Enter email"
              style={{
                width: '30%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                color: 'black',
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

export default Page;
"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../components/context/AuthContext";
import Spinner from "../components/Spinner";

const Page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const fields = [
    { name: 'title', label: 'Title', placeholder: 'Enter title', labelwidth:"20%", width: '50%' },
    { name: 'subdomain', label: 'Subdomain', placeholder: 'Enter subdomain', labelwidth:"20%", width: '60%' },
    { name: 'keyword', label: 'Keyword', placeholder: 'Enter keyword', labelwidth:"20%", width: '60%' },
    { name: 'summary', label: 'Summary', placeholder: 'Enter a short summary for the document', labelwidth:"20%", width: '80%' },
    { name: 'url', label: 'url', placeholder: 'Paste the website link/url for the document', labelwidth:"20%", width: '80%' },
    // Add more fields as needed
  ];
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

  const handleFormSubmit = async () => {

    const newData = {};
    fields.forEach((field) => {
      console.log(formData[field.name]);
    });
  }

  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : user ? (
        <div>
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
            <input
              type="text"
              id={field.name}
              value={formData[field.name]}
              onChange={(e) => handleInputChange(e, field.name)}
              placeholder={field.placeholder}
              style={{ width: field.width, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', color: 'black' }}
            />
          </div>
        </div>
      ))}
      <button
        onClick={handleFormSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Add Document
      </button>
    </div>
        </div>
      ) : (
        <p>You must be logged in to view this page - protected route.</p>
      )}
    </div>
  );
};

export default Page;
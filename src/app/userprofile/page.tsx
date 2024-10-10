"use client";
import React, { useState } from "react";

const BookShalaDashboard = () => {
  const [userName, setUserName] = useState("User Name");
  const [email, setEmail] = useState("User mail id");
  const [contactNo, setContactNo] = useState("User contact no.");
  const [address, setAddress] = useState("User address");
  const [preferredCategories] = useState([
    "Fantasy",
    "Romance",
    "Graphic Novels",
    "Comics",
    "Cookbooks",
    "Health and wellness",
  ]);

  const [stats] = useState({
    sales: 10,
    bids: 4,
    swaps: 5,
    donates: 7,
  });

  const handleEditProfile = () => {
    alert("Edit Profile Clicked");
  };

  return (
    <div className="bg-[#806044] min-h-screen">
      <div className="container mx-auto p-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center w-[100%] p-8  justify-between">
              <div className="flex flex-col">
                <div className="rounded-full bg-gray-300 w-28 h-28 flex items-center justify-center">
                  <span className="text-center text-gray-600">Upload Photo</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">{userName}</h2>
                  <button
                    onClick={handleEditProfile}
                    className="text-blue-500 underline"
                  >
                    Edit profile
                  </button>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="text-blue-600 mr-2">📧</div>
                  <span>{email}</span>
                </div>
                <div className="flex items-center">
                  <div className="text-green-600 mr-2">📞</div>
                  <span>{contactNo}</span>
                </div>
                <div className="flex items-center">
                  <div className="text-blue-600 mr-2">📍</div>
                  <span>{address}</span>
                </div>
              </div>

              <button className="bg-gray-200 text-blue-700 px-4 py-2 rounded-lg shadow hover:text-white hover:bg-blue-600">
              Upload a book to sell +
            </button>
            </div>

           
          </div>

          <div className="space-y-5">
            <div className="text-xl font-sans text-[#806044] italic font-bold">
              <h1>Preferred Book Categories</h1>
            </div>

            <div>
              <ul className="flex flex-wrap justify-around font-semibold list-disc">
                <div>
                  <li>Fantasy</li>
                  <li>Romance</li>
                </div>
                <div>
                  <li>Graphic Novels</li>
                  <li>Comics</li>
                </div>
                <div>
                  <li>Cookbooks</li>
                  <li>Health and wellness</li>
                </div>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key} className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                <p className="text-2xl">{value}</p>
                <button className="text-blue-500 mt-2">View</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShalaDashboard;

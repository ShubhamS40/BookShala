'use client'
import { useState } from 'react';
import Image from 'next/image';

const authors = [
  {
    name: 'Jane Doe',
    bio: 'Jane Doe is an award-winning author known for her thrilling novels. Her work has been translated into multiple languages and has captivated readers worldwide.',
    profilePicture: '/jane-doe.jpg', // Replace with your image path
    featuredBooks: [
      { title: 'The Mystery of Time', cover: '/book1.jpg' },
      { title: 'Echoes of the Past', cover: '/book2.jpg' },
    ],
  },
  {
    name: 'John Smith',
    bio: 'John Smith is a renowned author of science fiction and fantasy. His imaginative worlds and compelling characters have earned him a dedicated following.',
    profilePicture: '/john-smith.jpg', // Replace with your image path
    featuredBooks: [
      { title: 'Galactic Adventures', cover: '/book3.jpg' },
      { title: 'Realm of Dreams', cover: '/book4.jpg' },
    ],
  },
  // Add more authors as needed
];

export default function AuthorPage() {
  const [selectedAuthorIndex, setSelectedAuthorIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const selectedAuthor = authors[selectedAuthorIndex];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Featured Authors
      </h1>

      <div className="flex justify-center mb-6">
        {authors.map((author, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedAuthorIndex(index);
              setShowMore(false);
            }}
            className={`mx-2 px-4 py-2 rounded-full ${
              selectedAuthorIndex === index
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            } hover:bg-blue-500 transition-all duration-300`}
          >
            {author.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center md:flex-row md:items-start">
        <Image
          src={selectedAuthor.profilePicture}
          alt={`${selectedAuthor.name} Profile Picture`}
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />
        <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
          <p className="text-gray-700">
            {showMore ? selectedAuthor.bio : `${selectedAuthor.bio.substring(0, 100)}...`}
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 text-blue-600 hover:text-blue-800 transition-all duration-300"
          >
            {showMore ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10">Featured Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {selectedAuthor.featuredBooks.map((book, index) => (
          <div
            key={index}
            className="group relative overflow-hidden shadow-lg rounded-lg transform transition hover:scale-105"
          >
            <Image
              src={book.cover}
              alt={book.title}
              width={300}
              height={400}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-bold text-lg">{book.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
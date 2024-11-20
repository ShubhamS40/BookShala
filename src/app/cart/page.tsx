import React from 'react';

interface Book {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  returnPolicy: string;
  deliveryDate: string;
  imageUrl: string;
}

const books: Book[] = [
  {
    id: 1,
    name: 'The Great Gatsby',
    price: 1507,
    originalPrice: 2599,
    discount: 42,
    returnPolicy: '14 days return available',
    deliveryDate: '10 Oct 2023',
    imageUrl: '/path/to/image1.jpg',
  },
  {
    id: 2,
    name: 'Pride and Prejudice',
    price: 495,
    originalPrice: 1599,
    discount: 69,
    returnPolicy: '14 days return available',
    deliveryDate: '10 Oct 2023',
    imageUrl: '/path/to/image2.jpg',
  },
  {
    id: 3,
    name: '1984 by George Orwell',
    price: 489,
    originalPrice: 1399,
    discount: 65,
    returnPolicy: '14 days return available',
    deliveryDate: '10 Oct 2023',
    imageUrl: '/path/to/image3.jpg',
  },
];

const CartPage: React.FC = () => {
  const totalMRP = books.reduce((acc, book) => acc + book.originalPrice, 0);
  const totalDiscount = books.reduce((acc, book) => acc + (book.originalPrice - book.price), 0);
  const convenienceFee = 99;
  const finalPrice = totalMRP - totalDiscount + convenienceFee;

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Book Details Section */}
        <div className="flex-1">
          {books.map((book) => (
            <div
              key={book.id}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-4"
            >
              <img
                src={book.imageUrl}
                alt={book.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {book.name}
                </h4>
                <p className="text-sm text-gray-500">
                  ₹{book.price}{' '}
                  <span className="line-through text-gray-400">
                    ₹{book.originalPrice}
                  </span>{' '}
                  ({book.discount}% OFF)
                </p>
                <p className="text-sm text-green-600">{book.returnPolicy}</p>
                <p className="text-sm text-gray-500">
                  Delivery by {book.deliveryDate}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Price Details Section */}
        <div className="w-full lg:w-1/3 border border-gray-200 rounded-lg shadow-md p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            PRICE DETAILS ({books.length} Items)
          </h4>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Total MRP</span>
            <span>₹{totalMRP}</span>
          </div>
          <div className="flex justify-between text-sm text-green-600 mb-2">
            <span>Discount on MRP</span>
            <span>-₹{totalDiscount}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Convenience Fee</span>
            <span>₹{convenienceFee}</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-base font-semibold text-gray-800 mb-4">
            <span>Total Amount</span>
            <span>₹{finalPrice}</span>
          </div>
          <button className="w-full bg-[#806044] text-white py-3 rounded-lg font-semibold hover:bg-[#684c37] transition duration-300">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

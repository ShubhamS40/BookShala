'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Define the Book type
interface Book {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  returnPolicy: string;
  deliveryDate: string;
  image: string;
  quantity: number; // Added quantity field
}

const CartPage: React.FC = () => {
  const [lastOrderQuantities, setLastOrderQuantities] = useState<Record<number, number>>({});

  // Fetch books data from Redux store
  const books = useSelector((state: any) => state.addCart.item);

  // Calculate total MRP, total discount, and final price
  const totalMRP = books.reduce(
    (acc: number, book: Book) => acc + book.price * book.quantity,
    0
  );
  const totalDiscount = books.reduce(
    (acc: number, book: Book) => acc + (book.originalPrice - book.price) * book.quantity,
    0
  );
  const convenienceFee = 99;
  const finalPrice = totalMRP + convenienceFee;

  const handlePlaceOrder = () => {
    const quantities = books.reduce((acc: Record<number, number>, book: Book) => {
      acc[book.id] = book.quantity;
      return acc;
    }, {});
    setLastOrderQuantities(quantities); // Save the last ordered quantities
    alert('Order placed successfully!');
  };

  const handleOrder = async () => {
    const receipt = `receipt_${Date.now()}`; // Generate a unique receipt ID

    // Making the POST request to Razorpay API
    const response:any = await fetch("http://localhost:3000/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({
        amount: finalPrice, // Pass the final price
        receipt,
        productName:books.map((book:Book)=>book.name) ,// Pass the unique receipt ID
      }),

      
    });

    
   

    const data = await response.json();
    console.log("Order response from Razorpay:", data);

    
    if (data && data.id) {
      const options = {
        key: process.env.RAZORPAY_KEY_ID, // Your Razorpay Key ID
        amount: data.amount, // The amount returned from Razorpay
        currency: "INR",
        order_id: data.id, // Order ID returned by Razorpay
        handler: function (response: any) {
          // Handle payment success response
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "John Doe", // Replace with dynamic user info if needed
          email: "john@example.com", // Replace with dynamic user info if needed
          contact: "9876543210", // Replace with dynamic user info if needed
        },
        notes: {
          address: "Hello World", // Custom notes (optional)
        },
        theme: {
          color: "#F37254", // Customize the color of the Razorpay checkout UI
        },
      };
  
      // Directly use Razorpay without 'new'
      (window as any).Razorpay(options).open(); // Open the Razorpay checkout modal
    } else {
      alert("Error placing the order.");
    }
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Book Details Section */}
        <div className="flex-1">
          {books.map((book: Book) => (
            <div
              key={book.id}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-4"
            >
              <img
                src={book.image}
                alt={book.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{book.name}</h4>
                <p className="text-sm text-gray-500">
                  ₹{book.price}{' '}
                  <span className="line-through text-gray-400">₹{book.originalPrice}</span>{' '}
                  ({book.discount}% OFF)
                </p>
                <p className="text-sm text-green-600">{book.returnPolicy}</p>
                <p className="text-sm text-gray-500">Delivery by {book.deliveryDate}</p>
                <p className="text-sm text-gray-600">Quantity: {book.quantity}</p>
                {lastOrderQuantities[book.id] && (
                  <p className="text-sm text-blue-600">
                    Last ordered quantity: {lastOrderQuantities[book.id]}
                  </p>
                )}
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
          <button
            className="w-full bg-[#806044] text-white py-3 rounded-lg font-semibold hover:bg-[#684c37] transition duration-300"
            onClick={handleOrder} // Use handleOrder for the order placement
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiX, FiTrash2 } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import { removeFromCart, updateQuantity } from '@/redux/slice/cartSlice';
import Script from 'next/script';

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
  const dispatch = useDispatch();
  const [lastOrderQuantities, setLastOrderQuantities] = useState<Record<number, number>>({});
  const [isRemoving, setIsRemoving] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [paymentError, setPaymentError] = useState('');

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

 

  const handleOrder = async () => {
    try {
      setIsLoading(true);
      setPaymentError('');
      const receipt = `receipt_${Date.now()}`; // Generate a unique receipt ID

      // Making the POST request to Razorpay API
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({
          amount: finalPrice, // Pass the final price
          receipt,
          productName: books.map((book: Book) => book.name), // Pass the unique receipt ID
        }),
      });

      const data = await response.json();
      console.log("Order response from Razorpay:", data);
      
      if (data && data.id) {
        // Make sure Razorpay is loaded
        if (typeof window !== 'undefined' && (window as any).Razorpay) {
          const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Updated environment variable name
            amount: data.amount, // The amount returned from Razorpay
            currency: "INR",
            order_id: data.id, // Order ID returned by Razorpay
            handler: function (response: any) {
              // Handle payment success response
              alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
            },
            prefill: {
              name: "Shubham", // Replace with dynamic user info if needed
              email: "shubham@gmail.com", // Replace with dynamic user info if needed
              contact: "7303298030", // Replace with dynamic user info if needed
            },
            notes: {
              address: "Delhi", // Custom notes (optional)
            },
            theme: {
              color: "#806044", // Customize the color of the Razorpay checkout UI
            },
            modal: {
              ondismiss: function() {
                setIsLoading(false);
              }
            }
          };
      
          // Create a new Razorpay instance and open the payment modal
          const razorpayInstance = new (window as any).Razorpay(options);
          razorpayInstance.on('payment.failed', function (response: any) {
            setPaymentError('Payment failed: ' + response.error.description);
            setIsLoading(false);
          });
          razorpayInstance.open();
        } else {
          setPaymentError('Razorpay SDK not loaded. Please refresh the page and try again.');
          setIsLoading(false);
        }
      } else {
        setPaymentError(data.error || 'Error creating payment order');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error in payment processing:', error);
      setPaymentError('An unexpected error occurred. Please try again later.');
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen p-6">
      {/* Razorpay Script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Book Details Section */}
        <div className="flex-1">
          {books.length > 0 ? books.map((book: Book) => (
            <div
              key={book.id}
              className="relative flex items-center gap-4 p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-4 bg-white"
            >
              {/* Remove Button */}
              <button 
                onClick={() => {
                  setIsRemoving({...isRemoving, [book.id]: true});
                  setTimeout(() => {
                    dispatch(removeFromCart(book.id));
                  }, 300);
                }}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
                title="Remove from cart"
              >
                <FiX size={20} />
              </button>
              
              <div className={`relative transition-all duration-300 ${isRemoving[book.id] ? 'opacity-0 scale-95' : 'opacity-100'}`}>
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-32 h-32 rounded-lg object-cover shadow-sm hover:shadow-md transition-shadow"
                />
              </div>
              
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{book.name}</h4>
                <div className="flex items-baseline mb-1">
                  <p className="text-lg font-bold text-[#806044] mr-2">₹{book.price}</p>
                  <p className="text-sm line-through text-gray-400 mr-2">₹{book.originalPrice}</p>
                  <p className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">{book.discount}% OFF</p>
                </div>
                
                {book.returnPolicy && (
                  <p className="text-sm text-green-600 mb-1">
                    <span className="font-medium">Return Policy:</span> {book.returnPolicy}
                  </p>
                )}
                
                {book.deliveryDate && (
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-medium">Delivery by:</span> {book.deliveryDate}
                  </p>
                )}
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-700 mr-2">Quantity:</span>
                    <select
                      value={book.quantity}
                      onChange={(e) => dispatch(updateQuantity({id: book.id, quantity: Number(e.target.value)}))}
                      className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#806044]/50 text-sm"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setIsRemoving({...isRemoving, [book.id]: true});
                      setTimeout(() => {
                        dispatch(removeFromCart(book.id));
                      }, 300);
                    }}
                    className="text-sm text-red-500 flex items-center hover:underline transition-colors"
                  >
                    <FiTrash2 size={14} className="mr-1" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <FaShoppingCart className="text-gray-300 text-6xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
              <a href="/" className="px-6 py-3 bg-[#806044] text-white rounded-lg hover:bg-[#684c37] transition-colors">
                Continue Shopping
              </a>
            </div>
          )}
        </div>

        {/* Price Details Section */}
        {books.length > 0 && (
          <div className="w-full lg:w-1/3 border border-gray-200 rounded-lg shadow-md p-6 h-fit bg-white sticky top-24">
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
          {paymentError && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md border border-red-200 text-sm">
              {paymentError}
            </div>
          )}
          <button
            className={`w-full bg-[#806044] text-white py-3 rounded-lg font-semibold hover:bg-[#684c37] transition duration-300 flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            onClick={handleOrder}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'PLACE ORDER'
            )}
          </button>
        </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

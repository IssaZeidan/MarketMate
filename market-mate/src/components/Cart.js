import React, { useContext, useState } from 'react';
import { CartContext } from '../App';

function Cart() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const [isPaymentDone, setIsPaymentDone] = useState(false);

  const handleCheckout = () => {
    setIsPaymentDone(true);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cart.map((item) => (
          <div key={item.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <img className="h-48 w-full object-cover" src={item.image} alt={item.title} />
            <div className="p-4">
              <h2 className="text-lg font-medium text-gray-900">{item.title}</h2>
              <p className="mt-2 text-sm text-gray-500">{item.description}</p>
              <div className="mt-4 flex justify-between">
                <div className="text-lg font-medium text-gray-900">${item.price.toFixed(2)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCheckout}>
          Checkout (${totalPrice.toFixed(2)})
        </button>
      </div>
      {isPaymentDone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Payment Done Successfully!</h2>
            <p className="text-gray-700">Thank you for your purchase.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => setIsPaymentDone(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
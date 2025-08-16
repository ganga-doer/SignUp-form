import React from "react";

const CardCheckout = () => {
  return (
    <div className="min-h-screen bg flex items-center justify-center p-4">
      <div className="rounded-2xl shadow-lg w-full max-w-md p-6 bg-black/30 backdrop-blur-md text-yellow-200">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Checkout with Credit Card
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name on Card
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              maxLength={19}
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1" htmlFor="expiry">
                Expiration Date
              </label>
              <input
                type="text"
                id="expiry"
                placeholder="MM/YY"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                maxLength={5}
              />
            </div>

            {/* CVV */}
            <div className="flex-1">
              <label className="block text-gray-700 mb-1" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="XXX"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                maxLength={4}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="address">
              Billing Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="123 Main St"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="City"
              className="flex-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="State"
              className="flex-1 border w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="ZIP Code"
              className="flex-1 border w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Country"
              className="flex-1 border w-full border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardCheckout;

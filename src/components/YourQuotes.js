import { Link } from 'react-router-dom';
import QuoteItem from './QuoteItem';

function YourQuotes({ quotes, removeQuote, shareQuote }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-pink-950 text-white font-poppins flex flex-col items-center p-6">
      <div className="max-w-full md:max-w-[600px] w-full space-y-6">
        <h1 className="text-4xl font-bold text-pink-300 text-center mb-8">Your Quotes</h1>
        <div className="space-y-4">
          {quotes.length === 0 ? (
            <p className="text-gray-400 text-center">No quotes added yet.</p>
          ) : (
            quotes.map((quote, index) => (
              <QuoteItem
                key={index}
                quote={quote}
                index={index}
                removeQuote={removeQuote}
                shareQuote={shareQuote}
              />
            ))
          )}
        </div>
        <div className="text-center">
          <Link to="/">
            <button className="bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition transform hover:scale-105">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default YourQuotes;
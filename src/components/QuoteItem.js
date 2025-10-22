function QuoteItem({ quote, index, removeQuote, shareQuote }) {
  return (
    <div className="card flex justify-between items-center p-6 bg-white text-black rounded-2xl shadow-md">
      <div>
        <p className="italic text-lg">"{quote.text}"</p>
        <p className="text-sm text-gray-600 mt-2">— {quote.author}</p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => shareQuote(quote)}
          className="bg-pink-300 text-black px-4 py-2 rounded-full shadow-md hover:bg-pink-400 transition transform hover:scale-105"
        >
          Share
        </button>
        <button
          onClick={() => removeQuote(index)}
          className="bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition transform hover:scale-105"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default QuoteItem;
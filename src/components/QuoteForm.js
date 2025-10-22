import { useState } from 'react';

function QuoteForm({ addQuote }) {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && author.trim()) {
      addQuote({ text, author });
      setText('');
      setAuthor('');
    }
  };

  return (
    <div className="mb-8 p-6 bg-white text-black rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-pink-300 mb-4">Add Your Quote</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter quote"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-pink-300 text-black p-3 rounded-full shadow-md hover:bg-pink-400 transition transform hover:scale-105"
        >
          Add Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteForm;
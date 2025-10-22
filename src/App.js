import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import QuoteForm from "./components/QuoteForm";
import YourQuotes from "./components/YourQuotes";

const initialQuotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
];

function App() {
  const [quotes, setQuotes] = useState(() => {
    const saved = localStorage.getItem("quotes");
    return saved ? JSON.parse(saved) : initialQuotes;
  });
  const [currentQuote, setCurrentQuote] = useState(null);

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  const addQuote = (quote) => setQuotes([...quotes, quote]);

  const removeQuote = (index) => {
    const updated = quotes.filter((_, i) => i !== index);
    setQuotes(updated);
    if (currentQuote && quotes[index].text === currentQuote.text) {
      setCurrentQuote(null);
    }
  };

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const shareQuote = (quote) => {
    const shareText = `"${quote.text}" — ${quote.author}`;
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-black to-pink-950 text-white font-poppins">
        {/* Header */}
        
        <header className="header-bg backdrop-blur-md sticky top-0 z-50 text-center py-5">
        <center>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-fuchsia-400 drop-shadow-lg tracking-wide">
            Quotella✨
          </h1>
          
          <p className="text-gray-300 text-sm mt-1 italic">
            “Where thoughts find their voice.”
          </p></center>
          <hr className="border-white mt-4 mx-auto w-1/2" />
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-10 space-y-6">
          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-full md:max-w-[650px] w-full animate-fadeIn space-y-6">
                  <div className="text-center">
                    <button
                      onClick={getRandomQuote}
                      className="bg-gradient-to-r from-pink-300 to-fuchsia-400 text-black px-8 py-3 rounded-full shadow-lg hover:shadow-pink-400/50 hover:scale-105 transition-all duration-300"
                    >
                      ✨ Discover a Quote
                    </button>

                    {currentQuote && (
                      <div className="card flex justify-between items-center p-6 bg-white text-black rounded-2xl shadow-md">
                        <div>
                          <p className="italic text-lg">"{currentQuote.text}"</p>
                          <p className="text-sm text-gray-600 mt-2">— {currentQuote.author}</p>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={() => shareQuote(currentQuote)}
                            className="bg-pink-300 text-black px-4 py-2 rounded-full shadow-md hover:bg-pink-400 transition transform hover:scale-105"
                          >
                            Share
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <QuoteForm addQuote={addQuote} />

                  <div className="text-center">
                    <Link to="/your-quotes">
                      <button className="glass-button bg-white/20 text-pink-200 px-6 py-3 rounded-full shadow-md hover:bg-white/30 transition transform hover:scale-105">
                        🌸 View Your Quotes
                      </button>
                    </Link>
                  </div>
                </div>
              }
            />

            <Route
              path="/your-quotes"
              element={
                <YourQuotes
                  quotes={quotes}
                  removeQuote={removeQuote}
                  shareQuote={shareQuote}
                />
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer-bg backdrop-blur-md text-center py-5 text-sm text-pink-200">
          <hr className="border-white mb-4 mx-auto w-1/2" />
          <center>
          <p>
            🌷 “Crafted with love, inked with soul.” — <span className="text-white font-semibold">Quotella</span>
          </p></center>
        </footer>
      </div>
    </Router>
  );
}

export default App;
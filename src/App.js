/** @format */

import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslated, setIsTranslated] = useState(false);

  const URI = "https://api.funtranslations.com/translate/groot.json";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${URI}?text=${text}`);
    const data = await res.json();

    if (data) {
      setTranslatedText(data.contents.translated);
      setIsTranslated(true);
    }
  };

  return (
    <div className="bg-gradient-to-b from-red-300 to-purple-700 min-h-screen">
      <h1 className="text-white font-bold text-4xl text-center underline italic font-serif">
        I am Groot
      </h1>

      <div className="flex mx-auto items-center justify-center shadow-lg mt-56 max-w-lg">
        <form
          className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-2 mt-2">
              {isTranslated ? (
                <textarea
                  className="rounded border w-full h-20 p-2 outline-none cursor-not-allowed"
                  placeholder="What do you want to translate"
                  value={translatedText}
                  disabled
                />
              ) : (
                <textarea
                  className="rounded border w-full h-20 p-2 outline-none "
                  placeholder="What do you want to translate"
                  value={text}
                  onChange={(e) => {
                    e.preventDefault();
                    setText(e.target.value);
                  }}
                  required
                />
              )}
            </div>
            <div className="w-full flex items-start px-3">
              <div className="flex items-start w-1/2 mr-auto">
                <svg
                  fill="none"
                  className="w-5 h-5 text-red-500 mr-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xs md:text-sm pt-px text-red-500">
                  Error text
                </p>
              </div>
              <div className="-mr-1">
                {isTranslated ? (
                  <button
                    className="bg-white text-gray-700 font-medium py-1 px-4 border rounded-lg hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsTranslated(false);
                      setText("");
                    }}
                  >
                    Translate something else
                  </button>
                ) : (
                  <button className="bg-white text-gray-700 font-medium py-1 px-4 border rounded-lg hover:bg-gray-100">
                    Translate
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

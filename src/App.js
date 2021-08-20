/** @format */

function App() {
  return (
    <div className="bg-gradient-to-b from-red-300 to-purple-700 min-h-screen">
      <h1 className="text-white font-bold text-4xl text-center underline italic font-serif">
        I am Groot
      </h1>

      <div class="flex mx-auto items-center justify-center shadow-lg mt-56 max-w-lg">
        <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-2 mt-2">
              <textarea
                class="rounded border border-gray-400 leading-normal w-full h-20 p-2 placeholder-gray-700 outline-none"
                name="body"
                placeholder="What do you want to translate"
                required
              />
            </div>
            <div class="w-full flex items-start px-3">
              <div class="flex items-start w-1/2 mr-auto">
                <svg
                  fill="none"
                  class="w-5 h-5 text-red-500 mr-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p class="text-xs md:text-sm pt-px text-red-500">Error text</p>
              </div>
              <div class="-mr-1">
                <button className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100">
                  Translate
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

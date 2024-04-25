export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white max-w-screen-sm flex flex-col md:flex-row gap-2 w-full shadow-lg p-5 rounded-3xl">
        <input
          type="text"
          placeholder="Search here"
          className="w-full rounded-full p-3 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow "
        />
        <button className="bg-black text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium outline-none md:px-10">
          Search
        </button>
      </div>
    </main>
  );
}

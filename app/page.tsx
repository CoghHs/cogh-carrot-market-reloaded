export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white max-w-screen-sm flex flex-col md:flex-row gap-2 w-full shadow-lg p-5 rounded-3xl *:outline-none ring ring-transparent transition-shadow has-[:invalid]:ring-red-200 ">
        <input
          type="email"
          placeholder="Email address"
          required
          className="w-full rounded-full p-3 bg-gray-200 pl-5  ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow invalid:focus:ring-red-500 peer"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required
        </span>
        <button className=" bg-black text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium  md:px-10">
          Log in
        </button>
      </div>
    </main>
  );
}

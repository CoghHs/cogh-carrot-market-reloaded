export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white max-w-screen-sm flex flex-col gap-3 w-full shadow-lg p-5 rounded-3xl ">
        <div className="group flex flex-col">
          <input
            className="w-full bg-gray-100"
            type="email"
            placeholder="Write your email"
          />
          <span className="group-focus-within:block hidden">
            Make sure it is a valid email
          </span>
          <button>Submit</button>
        </div>
      </div>
    </main>
  );
}

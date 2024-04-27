export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white max-w-screen-sm flex flex-col gap-3 w-full shadow-lg p-5 rounded-3xl ">
        {["Nico", "Cogh", "Zu", "Jake"].map((person, index) => (
          <div key={index} className="flex items-center gap-5 ">
            <div className="size-7 bg-blue-400 rounded-full" />
            <span className=" text-lg font-medium">{person}</span>
            <div className="relative size-7 bg-red-500 text-white flex items-center justify-center rounded-full">
              <span className="z-10">{index}</span>
              <div className="size-7 bg-red-500 rounded-full absolute animate-ping" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

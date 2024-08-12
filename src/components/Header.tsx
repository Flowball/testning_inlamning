export default function Header() {
  return (
    <header className="flex flex-col">
      <h1 className="text-5xl">Calculator</h1>
      <div className="flex text-2xl">
        <div className="border p-5 w-full text-center hover:bg-black transition-all hover:text-white hover:cursor-pointer">
          Percentage
        </div>
        <div className="border p-5 w-full text-center hover:bg-black transition-all hover:text-white hover:cursor-pointer">
          Percentage
        </div>
        <div className="border p-5 w-full text-center hover:bg-black transition-all hover:text-white hover:cursor-pointer">
          Percentage
        </div>
      </div>
    </header>
  );
}

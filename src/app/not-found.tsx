import Link from "next/link";

const NotFound = () => {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <p className="text-7xl font-bold text-[#c2f800]">404</p>
      <h1 className="mt-4 text-3xl font-bold">PAGE NOT FOUND</h1>
      <p className="mt-3 text-gray-400">This page or workout does not exist.</p>

      <Link
        href="/"
        className="mt-7 rounded-md bg-[#c2f800] px-6 py-3 text-sm font-bold text-black"
      >
        Go to workouts
      </Link>
    </main>
  );
};

export default NotFound;

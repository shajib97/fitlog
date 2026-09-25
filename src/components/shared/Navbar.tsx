"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDumbbell } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-800 bg-[#0f1115]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <FaDumbbell className="text-[#c2f800]" />
          FITLOG
        </Link>

        <div className="flex gap-2">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-sm ${
              pathname === "/" ? "bg-[#1a2312] text-[#c2f800]" : "text-gray-400"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-sm ${
              pathname === "/my-plan"
                ? "bg-[#1a2312] text-[#c2f800]"
                : "text-gray-400"
            }`}
          >
            My Plan
          </Link>
        </div>

        <div className="flex gap-4 text-sm text-white">
          <Link href="/my-plan">
            Plan{" "}
            <span className="rounded-full bg-[#c2f800] px-2 text-black">0</span>
          </Link>

          <Link href="/my-plan">
            Saved{" "}
            <span className="rounded-full border border-gray-500 px-2">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

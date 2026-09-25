import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="grid items-center gap-8 rounded-2xl border border-[#222630] bg-[#15171d] p-8 md:grid-cols-2 md:p-14">
      <div>
        <p className="text-xs font-bold tracking-widest text-[#c2f800]">
          WORKOUT LIBRARY
        </p>

        <h1 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>

        <p className="mt-5 max-w-lg text-gray-400">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        <Link
          href="#library"
          className="mt-7 inline-block rounded-md bg-[#c2f800] px-6 py-3 text-xs font-bold text-black"
        >
          BROWSE WORKOUTS ↓
        </Link>
      </div>

      <div className="flex justify-center">
        <Image
          src="/images/banner.png"
          alt="Athlete training"
          width={334}
          height={334}
          className="h-auto w-full max-w-83.5 object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default Banner;

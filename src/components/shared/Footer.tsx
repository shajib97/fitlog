import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-[#222630] bg-[#0f1115]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-lg font-bold text-white">
          <Image
            src="/images/logo.png"
            alt=""
            width={28}
            height={28}
            className="object-contain"
          />
          FITLOG
        </div>

        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
};

export default Footer;

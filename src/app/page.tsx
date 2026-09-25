import { Suspense } from "react";
import Banner from "../components/homepage/Banner";
import Workouts from "../components/homepage/Workouts";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <Banner />

      <Suspense
        fallback={
          <div className="py-16 text-center text-[#c2f800]">
            Loading workouts…
          </div>
        }
      >
        <Workouts />
      </Suspense>
    </main>
  );
}

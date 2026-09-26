import { Suspense } from "react";
import Banner from "../components/homepage/Banner";
import Workouts from "../components/homepage/Workouts";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <Banner />

      <Suspense
        fallback={
          <div
            role="status"
            className="flex min-h-64 items-center justify-center gap-3 text-[#c2f800]"
          >
            <span className="h-7 w-7 animate-spin rounded-full border-2 border-[#c2f800] border-t-transparent" />
            Loading workouts…
          </div>
        }
      >
        <Workouts />
      </Suspense>
    </main>
  );
}

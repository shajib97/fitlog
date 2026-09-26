"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import ListedWorkoutCard from "../../components/shared/ListedWorkoutCard";
import { WorkoutContext } from "../../context/WorkoutContext";

const MyPlanPage = () => {
  const context = useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  if (!context) return null;

  if (!context.loaded) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center gap-3 text-[#c2f800]">
        <span className="h-7 w-7 animate-spin rounded-full border-2 border-[#c2f800] border-t-transparent" />
        Loading workouts…
      </main>
    );
  }

  const { plan, saved } = context;
  const workouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return b.duration - a.duration;
  });

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const summary = [
    { label: "Exercises", value: plan.length },
    { label: "Minutes", value: totalMinutes },
    { label: "Calories", value: totalCalories },
  ];

  return (
    <main className="mx-auto min-h-[70vh] max-w-7xl px-6 py-12">
      <h1 className="text-4xl font-bold">MY PLAN</h1>
      <p className="mt-2 text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {summary.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-[#222630] bg-[#15171d] p-6"
          >
            <p className="text-sm text-gray-400">{item.label}</p>
            <p className="mt-2 text-3xl font-bold text-[#c2f800]">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex gap-3 border-b border-[#222630] pb-4">
        <button
          onClick={() => setActiveTab("plan")}
          className={`rounded-full px-4 py-2 text-sm ${
            activeTab === "plan"
              ? "bg-[#c2f800] font-bold text-black"
              : "text-gray-400"
          }`}
        >
          Today&apos;s Plan ({plan.length})
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`rounded-full px-4 py-2 text-sm ${
            activeTab === "saved"
              ? "bg-[#c2f800] font-bold text-black"
              : "text-gray-400"
          }`}
        >
          Saved ({saved.length})
        </button>
      </div>

      <div className="mt-5 flex justify-end">
        <label className="flex items-center gap-3 text-sm text-gray-400">
          Sort By
          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(
                event.target.value as "duration" | "calories" | "rating",
              )
            }
            className="rounded-md border border-gray-600 bg-[#15171d] px-4 py-2 text-white"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      {workouts.length > 0 ? (
        <div className="mt-6 space-y-4">
          {sortedWorkouts.map((workout) => (
            <ListedWorkoutCard
              key={workout.id}
              workout={workout}
              listType={activeTab}
            />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-xl border border-[#222630] py-16 text-center">
          <h2 className="text-2xl font-bold">NOTHING HERE YET</h2>
          <p className="mt-2 text-gray-400">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-md bg-[#c2f800] px-6 py-3 text-sm font-bold text-black"
          >
            Go to workouts
          </Link>
        </div>
      )}
    </main>
  );
};

export default MyPlanPage;

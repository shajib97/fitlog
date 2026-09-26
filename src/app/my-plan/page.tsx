"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { WorkoutContext } from "../../context/WorkoutContext";
import ListedWorkoutCard from "../../components/shared/ListedWorkoutCard";

const MyPlanPage = () => {
  const context = useContext(WorkoutContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  if (!context) return null;

  const { plan, saved } = context;
  const workouts = activeTab === "plan" ? plan : saved;

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

      {workouts.length > 0 ? (
        <div className="mt-6 space-y-4">
          {workouts.map((workout) => (
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

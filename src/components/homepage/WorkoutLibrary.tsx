"use client";

import { useState } from "react";
import WorkoutCard from "../shared/WorkoutCard";
import { IWorkout } from "../../types/workout.types";

const WorkoutLibrary = ({ workouts }: { workouts: IWorkout[] }) => {
  const [searchText, setSearchText] = useState("");
  const query = searchText.toLowerCase().trim();

  const filteredWorkouts = workouts.filter(
    (workout) =>
      workout.name.toLowerCase().includes(query) ||
      workout.muscleGroups.some((group) => group.toLowerCase().includes(query)),
  );

  return (
    <>
      <input
        type="search"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="Search by name or tag"
        className="mt-8 w-full rounded-md border border-gray-600 bg-[#15171d] px-4 py-3 text-white sm:max-w-sm"
      />

      {filteredWorkouts.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-gray-400">No workouts match your search.</p>
      )}
    </>
  );
};

export default WorkoutLibrary;

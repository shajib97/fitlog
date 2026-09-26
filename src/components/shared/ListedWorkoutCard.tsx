"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaCheck, FaClock, FaFire, FaStar, FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";
import { WorkoutContext } from "../../context/WorkoutContext";
import { IWorkout } from "../../types/workout.types";

interface ListedWorkoutCardProps {
  workout: IWorkout;
  listType: "plan" | "saved";
}

const ListedWorkoutCard = ({ workout, listType }: ListedWorkoutCardProps) => {
  const context = useContext(WorkoutContext);

  if (!context) return null;

  const { setPlan, setSaved } = context;

  const handleRemove = () => {
    if (listType === "plan") {
      setPlan((previousPlan) =>
        previousPlan.filter((item) => item.id !== workout.id),
      );
    } else {
      setSaved((previousSaved) =>
        previousSaved.filter((item) => item.id !== workout.id),
      );
    }

    toast.success(`Removed "${workout.name}".`);
  };
  const handleMarkDone = () => {
    setPlan((previousPlan) =>
      previousPlan.filter((item) => item.id !== workout.id),
    );

    toast.success(`Marked "${workout.name}" as done.`);
  };

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-[#222630] bg-[#15171d] p-5 sm:flex-row">
      <Image
        src={workout.image}
        alt={workout.name}
        width={180}
        height={140}
        className="h-40 w-full rounded-lg object-cover sm:h-36 sm:w-44"
      />

      <div className="flex-1">
        <h2 className="text-xl font-bold uppercase">{workout.name}</h2>
        <p className="mt-1 text-sm text-gray-400">{workout.equipment}</p>

        <div className="mt-4 flex flex-wrap gap-5 border-t border-[#222630] pt-4 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <FaClock /> {workout.duration} min
          </span>
          <span className="flex items-center gap-2">
            <FaFire /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-2">
            <FaStar /> {workout.rating}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            href={`/workouts/${workout.id}`}
            className="rounded-md border border-gray-500 px-4 py-2 text-sm font-semibold hover:border-[#c2f800]"
          >
            View Details
          </Link>
          {listType === "plan" && (
            <button
              onClick={handleMarkDone}
              className="flex items-center gap-2 rounded-md bg-[#c2f800] px-4 py-2 text-sm font-semibold text-black"
            >
              <FaCheck />
              Mark as Done
            </button>
          )}
          <button
            onClick={handleRemove}
            aria-label={`Remove ${workout.name}`}
            className="rounded-md border border-gray-500 p-2.5 text-white hover:border-red-400 hover:text-red-400"
          >
            <FaXmark />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedWorkoutCard;

"use client";

import { useContext } from "react";
import { FaBookmark } from "react-icons/fa6";
import { toast } from "react-toastify";
import { WorkoutContext } from "../../context/WorkoutContext";
import { IWorkout } from "../../types/workout.types";

const SaveForLaterButton = ({ workout }: { workout: IWorkout }) => {
  const context = useContext(WorkoutContext);

  if (!context) return null;

  const { saved, setSaved } = context;

  const handleSave = () => {
    const alreadySaved = saved.find((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.warning(`"${workout.name}" is already saved.`);
      return;
    }

    setSaved((previousSaved) => [...previousSaved, workout]);
    toast.success(`Saved "${workout.name}" for later.`);
  };

  return (
    <button
      onClick={handleSave}
      className="flex items-center gap-2 rounded-md border border-gray-500 px-6 py-3 text-sm font-bold text-white"
    >
      <FaBookmark />
      Save for later
    </button>
  );
};

export default SaveForLaterButton;

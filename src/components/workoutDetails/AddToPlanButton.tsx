"use client";

import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { WorkoutContext } from "../../context/WorkoutContext";
import { IWorkout } from "../../types/workout.types";

const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {
  const context = useContext(WorkoutContext);

  if (!context) return null;

  const { plan, setPlan } = context;
  const planIsFull = plan.length >= 5;

  const handleAddToPlan = () => {
    const alreadyAdded = plan.find((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.warning(`"${workout.name}" is already in today's plan.`);
      return;
    }

    if (plan.length >= 5) {
      toast.warning("Today's plan can have at most five workouts.");
      return;
    }

    setPlan((previousPlan) => [...previousPlan, workout]);
    toast.success(`Added "${workout.name}" to today's plan.`);
  };

  return (
    <button
      onClick={handleAddToPlan}
      disabled={planIsFull}
      className="mt-8 flex items-center gap-2 rounded-md bg-[#c2f800] px-6 py-3 text-sm font-bold text-black disabled:cursor-not-allowed disabled:opacity-50"
    >
      <FaPlus />
      Add to today&apos;s plan
    </button>
  );
};

export default AddToPlanButton;

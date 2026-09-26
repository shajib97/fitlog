"use client";

import { createContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { IWorkout } from "../types/workout.types";

interface WorkoutContextType {
  plan: IWorkout[];
  setPlan: Dispatch<SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: Dispatch<SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  return (
    <WorkoutContext.Provider value={{ plan, setPlan, saved, setSaved }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;

"use client";

import { createContext, useEffect, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { IWorkout } from "../types/workout.types";

interface WorkoutContextType {
  plan: IWorkout[];
  setPlan: Dispatch<SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: Dispatch<SetStateAction<IWorkout[]>>;
  loaded: boolean;
}

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Read saved data after the page opens in the browser.
  useEffect(() => {
    try {
      const storedPlan = JSON.parse(
        localStorage.getItem("fitlog-plan") || "[]",
      );
      const storedSaved = JSON.parse(
        localStorage.getItem("fitlog-saved") || "[]",
      );

      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (Array.isArray(storedPlan)) setPlan(storedPlan);
      if (Array.isArray(storedSaved)) setSaved(storedSaved);
    } catch {
      // If stored data is damaged, start with empty lists.
    }

    setLoaded(true);
  }, []);

  // Save changes, but only after the old data has been read.
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [plan, saved, loaded]);

  return (
    <WorkoutContext.Provider value={{ plan, setPlan, saved, setSaved, loaded }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;

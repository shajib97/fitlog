import { IWorkout } from "../../types/workout.types";
import WorkoutLibrary from "./WorkoutLibrary";

const getWorkouts = async (): Promise<IWorkout[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to load workouts");
  }

  return response.json();
};

const Workouts = async () => {
  const workouts = await getWorkouts();

  return (
    <section id="library" className="py-16">
      <h2 className="text-3xl font-bold">THE LIBRARY</h2>
      <p className="mt-2 text-sm text-gray-400">
        Twelve lifts covering every major muscle group.
      </p>

      <WorkoutLibrary workouts={workouts} />
    </section>
  );
};

export default Workouts;

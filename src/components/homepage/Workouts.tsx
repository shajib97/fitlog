import { IWorkout } from "../../types/workout.types";

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

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="rounded-2xl border border-[#222630] bg-[#15171d] p-6"
          >
            {workout.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workouts;

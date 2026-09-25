import Image from "next/image";
import { notFound } from "next/navigation";
import { IWorkout } from "../../../types/workout.types";

interface WorkoutDetailsProps {
  params: Promise<{ id: string }>;
}

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsProps) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    notFound();
  }

  const workout: IWorkout = await response.json();

  if (!workout || String(workout.id) !== id) {
    notFound();
  }

  const specs = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating },
  ];

  return (
    <main className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2">
      <div className="overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d]">
        <Image
          src={workout.image}
          alt={workout.name}
          width={740}
          height={900}
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold uppercase">{workout.name}</h1>
        <p className="mt-4 leading-7 text-gray-400">{workout.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#c2f800] px-3 py-1 text-xs font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <section className="mt-8 rounded-xl border border-[#222630] bg-[#15171d] p-6">
          <h2 className="text-xl font-bold">KEY SPECS</h2>

          <div className="mt-4">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between gap-4 border-b border-[#222630] py-3 text-sm last:border-0"
              >
                <span className="text-gray-400">{spec.label}</span>
                <span className="text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold">INSTRUCTIONS</h2>

          <ol className="mt-4 space-y-4">
            {workout.instructions.map((step, index) => (
              <li key={index} className="flex gap-4 text-sm text-gray-300">
                <span className="font-bold text-[#c2f800]">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;

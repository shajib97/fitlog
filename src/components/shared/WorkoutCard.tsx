import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa6";
import { IWorkout } from "../../types/workout.types";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="h-full overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d] hover:border-[#c2f800]">
        <Image
          src={workout.image}
          alt={workout.name}
          width={740}
          height={400}
          className="h-48 w-full object-cover"
        />

        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#c2f800] px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="mt-3 text-xl font-bold uppercase text-white">
            {workout.name}
          </h3>
          <p className="mt-1 text-sm text-gray-400">{workout.equipment}</p>

          <div className="mt-5 flex flex-wrap gap-4 border-t border-[#222630] pt-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <FaClock /> {workout.duration} min
            </span>
            <span className="flex items-center gap-1">
              <FaFire /> {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <FaStar /> {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;

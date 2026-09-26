# FitLog

FitLog is a workout library where you can explore exercises, build a plan for today, and save workouts for later.

## Technologies

- Next.js App Router and TypeScript
- Tailwind CSS
- React Context API
- React Icons
- React Toastify
- Browser `localStorage`
- [FitLog API](https://api.abcz.workers.dev/api/fitlog)

## Features

1. Browse 12 workouts in a responsive library with images, categories, and stats.
2. View each workout’s description, equipment, key specs, and instructions.
3. Add up to five workouts to Today’s Plan and see live exercise, minute, and calorie totals.
4. Save workouts for later, mark planned workouts as done, and remove items with toast notifications.
5. Sort Plan or Saved workouts by duration, calories, or rating. Lists survive a page refresh.

The app also includes loading states and a custom 404 page.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- One workout: `https://api.abcz.workers.dev/api/fitlog/:id`

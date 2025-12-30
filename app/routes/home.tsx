import { Link } from "react-router";
import type { Route } from "./+types/home";

const logDates = [
  "2022-01-08",
  "2022-01-09",
  "2022-01-10",
  "2022-01-11",
  "2022-01-12",
  "2022-01-13",
  "2022-01-14",
  "2022-01-15",
  "2022-01-20",
  "2022-01-25",
  "2023-01-16",
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "castner.io | Personal Blog by Ryan Castner" },
    {
      name: "description",
      content:
        "Personal blog by Ryan Castner. I write about programming, software engineering, and the myriad of topics that interest me.",
    },
  ];
}

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-[97px_minmax(min-content,40ch)] gap-4 text-lg">
        <div>
          <div className="size-24 rounded-full border-2 border-gray-600 dark:border-gray-400">
            <img
              src="/avatar.jpeg"
              alt="A circle avatar with Ryan Castner's face."
              className="size-full rounded-full"
            />
          </div>
        </div>
        <div>
          <div>
            Personal blog by{" "}
            <a
              href="https://twitter.com/ryan_castner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Ryan Castner
            </a>
            .
          </div>
          <div>
            I write about programming, software engineering, and the myriad of
            topics that interest me.
          </div>
        </div>
      </div>
      <div className="mt-12 space-y-6 text-xl">
        {[...logDates].reverse().map((logDate) => (
          <div key={logDate}>
            <Link
              to={`/logs/${logDate}`}
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Daily Log: {logDate}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Link } from "remix";
import homeStyles from "../styles/home.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: homeStyles,
    },
  ];
}

const logLinks = [
  "2022-01-08",
  "2022-01-09",
  "2022-01-10",
  "2022-01-11",
  "2022-01-12",
  "2022-01-13",
];

export default function Index() {
  return (
    <div>
      <div className="description">
        <div>
          <div className="avatar">
            <img
              src="/avatar.jpeg"
              alt="A circle avatar with Ryan Castner's face."
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
      <div className="logLinks">
        {[...logLinks].reverse().map((logDate) => (
          <div>
            <Link key={logDate} to={`/logs/${logDate}`}>
              Daily Log: {logDate}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

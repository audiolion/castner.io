import logStyles from "../../styles/log.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: logStyles,
    },
  ];
}

export default function L2021_01_14() {
  return (
    <div className="log">
      <h1>Daily Log</h1>
      <h2>Jan 14, 2022</h2>
      <ul>
        <li>
          Had a good day finishing out my current sprint retro before a long
          weekend.
        </li>
        <li>Booster had me running a slight fever, but ibuprofen broke it.</li>
        <li>Had dinner with some friends!</li>
      </ul>
      <p>
        I suppose this is my first "zero" day. Besides a lot of coding for work,
        I didn't get anything done outside of that. But I have no illusions that
        every day will be productive, and that is ok. In all things balance.
        Till tomorrow.
      </p>
    </div>
  );
}

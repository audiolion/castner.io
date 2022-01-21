import logStyles from "../../styles/log.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: logStyles,
    },
  ];
}

export default function L2021_01_20() {
  return (
    <div className="log">
      <h1>Daily Log</h1>
      <h2>Jan 20, 2022</h2>
      <ul>
        <li>Recovering from a back injury, first day without pain meds.</li>
        <li>Debugged a TS Server crash due to infinite recursion.</li>
        <li>
          Listened to a Founder's talk{" "}
          <a
            href="https://twitter.com/ryan_castner/status/1484197098878869512"
            rel="noopener noreferrer"
            target="_blank"
          >
            episode about Planetscale
          </a>
          .
        </li>
      </ul>
      <p>
        The past few days have been rough. I injured my back in a pretty mundane
        way, jumping to catch a ball. It just seized up. I could hardly
        straighten it and the next day it was so painful I could barely walk. I
        was worried that something was seriously wrong. After a trip to the ER I
        was given some muscle relaxers and though they helped manage the pain,
        they also made my extremely drowsy. I slept 14 hours the first day, 13
        hours the next. Lots of rest, slow, careful movements, and stretching. I
        am feeling better now. It has been 24 hours since I had a muscle relaxer
        and the pain is manageable. For the first time I am not fighting off a
        persistent urge to sleep and feeling up to getting back to my usual
        pursuits.
      </p>
      <p>
        Today at work I finally decided to give in and figure out why my
        TypeScript Server was crashing. I really missed the auto imports and api
        docs for methods. After trying a number of things I finally decided to
        take an analytical approach to the problem. I looked at what had changed
        recently in the repository and noticed we had added some new flow type
        files. I then noticed in the TS Server logs that it was trying to
        analyze the flow-typed directory in our repository. That seemed wrong,
        and indeed there was an import cycle in the new flow types that was
        causing the TS Server crash. After using our `jsconfig.json` to ignore
        the directory and reloading, all was well.
      </p>
      <p>I hope to be back to normal tomorrow.</p>
    </div>
  );
}

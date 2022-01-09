import logStyles from "../../styles/log.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: logStyles,
    },
  ];
}

export default function L2021_01_08() {
  return (
    <div className="log">
      <h1>Daily Log</h1>
      <h2>Jan 8, 2022</h2>
      <ul>
        <li>
          Halfway through{" "}
          <a
            href="https://www.amazon.com/Crucial-Conversations-Talking-Stakes-Second/dp/1469266822"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crucial Conversations
          </a>
        </li>
        <li>
          Listened to two GoTime podcasts and four Swyx Mixtape episodes on
          habits.
        </li>
        <li>Played Chess with 5 year old niece (teaching her)</li>
        <li>
          Began reading{" "}
          <a
            href="https://www.learninpublic.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Coding Career Handbook
          </a>{" "}
          by{" "}
          <a
            href="https://www.swyx.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            swyx
          </a>
        </li>
      </ul>
      <p>
        Lots of time spent reading today. And in the process found about thirty
        new books to read 😅. Really enjoying swyx's book, it has branched off
        into so many topics that I want to take a deeper dive on.
      </p>
      <p>
        One of the concepts in the book encourages the reader to learn in
        public. This has terrified me for a long time. I have always felt like
        if I showed what I was learning in public, people would look down on me
        for how little I knew, or would think that I wasn't a competent
        developer. I remember when Dan Abramov posted{" "}
        <a
          href="https://overreacted.io/things-i-dont-know-as-of-2018/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Things I don't know as of 2018
        </a>
        . I admired his courage to be so vulnerable as a thought leader in our
        community with way more reputation to lose. And yet, I still did not
        feel empowered to do the same. In fact, I remember a principal engineer
        I worked with mocking him on Slack and musing about how someone who knew
        so little could get hired at Facebook. I am no longer scared though. A
        mixture of time, experience, and seeing others be courageous without it
        hurting their careers has bolstered my confidence.
      </p>
      <p>
        Following{" "}
        <a
          href="https://jamesclear.com/goals-systems"
          target="_blank"
          rel="noopener noreferrer"
        >
          systems over goals{" "}
        </a>
        , I am working to build a habit to write daily. I have no aspiration to
        be glamorous. If it sticks I may invest some time making this web log
        nicer. I certainly have so many ideas to make it fun, but I don't want
        to be another built my shiny new personal log folks who never end up
        writing. So here is to 2022 and beyond!
      </p>
    </div>
  );
}

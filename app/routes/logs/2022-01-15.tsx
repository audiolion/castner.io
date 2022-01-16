import logStyles from "../../styles/log.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: logStyles,
    },
  ];
}

export default function L2021_01_15() {
  return (
    <div className="log">
      <h1>Daily Log</h1>
      <h2>Jan 15, 2022</h2>
      <ul>
        <li>
          Halfway through{" "}
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
        <li>
          Started{" "}
          <a
            href="https://staffeng.com/book"
            target="_blank"
            rel="noopener noreferrer"
          >
            Staff Engineer
          </a>{" "}
          by Will Larson
        </li>
      </ul>
      <p>
        Lots of great content so far in The Coding Career Handbook. Part II was
        about principles. One of which was the importance and value of writing.
        Writing has become ever more critical in a remote workforce world. When
        we are all communicating asynchronously, writing provides a way to
        clearly express thoughts to others. When we write, we can scale
        ourselves because a well written document can be consumed by many people
        at any time they wish. Writing is a way to have your ideas live on
        beyond your life. Though, not all writing can accomplish this. Writing
        about news and recent events has a very short half-life. Whereas forms
        of evergreen content can be relevant years, decades, or centuries later.
      </p>
      <p>
        I am excited to continue to improve my writing. The first way is by
        simply doing it. Writing forces us to convey ideas and information in a
        sequential manner. We have to consider our audience and the context they
        may or may not have. What we write about has to be somewhat novel as
        well. If we are regurgitating the same information that everyone else is
        already aware of, it won't capture interest. We need to take in content
        and make new connections, synthesize it in new ways, or write about
        topics that people have not written much about yet. It helps if we are
        interested in what we are writing about. If we aren't it will be a slog
        to research and synthesize.
      </p>
      <p>
        I think on top of my daily logs, I am going to try to create a weekly
        blog post on some tech topic that falls into my{" "}
        <a
          href="https://en.wikipedia.org/wiki/Ikigai"
          rel="noopener noreferrer"
          target="_blank"
        >
          ikigai
        </a>
        . This will help me improve my writing and push me to keep climbing{" "}
        <a
          href="https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/"
          rel="noopener noreferrer"
          target="_blank"
        >
          bloom's taxonomy
        </a>{" "}
        to deeply know topics. If I can keep improving I may invest in it by
        getting the services of an editor and taking some writing courses. I may
        try to write for some other sites as well. Before I get too far ahead of
        myself though, lets see if I can get a post or two up. I suppose this
        means I will have to change the structure of this site slightly by
        adding a navigation bar. I may take the time to streamline some small
        annoyances I have had in daily logging so far as well.
      </p>
    </div>
  );
}

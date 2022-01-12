import logStyles from "../../styles/log.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: logStyles,
    },
  ];
}

export default function L2021_01_10() {
  return (
    <div className="log">
      <h1>Daily Log</h1>
      <h2>Jan 11, 2022</h2>
      <ul>
        <li>
          Started a new audiobook{" "}
          <a
            href="https://www.audible.com/pd/Why-We-Sleep-Audiobook/B0752ZQR33"
            target="_blank"
            rel="noopener noreferrer"
          >
            Why We Sleep: Unlocking the Power of Sleep and Dreams
          </a>
          !
        </li>
        <li>Finished the final episode of Modern Family.</li>
      </ul>
      <p>
        Why We Sleep is <em>really</em> good. I have never been able to operate
        on less than 6-7 hours of sleep and this book makes me feel a lot better
        about that fact. I used to have this self talk that I will "sleep when I
        am dead" to try and toughen myself up. But Matthew Walker helps us see
        that that day will come much sooner if we don't get enough sleep.
      </p>
      <p>
        The book also led me on a rabbit trail of reading about experiments we
        have done to animals to understand the effects of drugs. Some of the
        information was fascinating, like how{" "}
        <a
          href="https://www.the-sun.com/lifestyle/tech-old/272278/nasa-gave-spiders-drugs-how-their-webs-changed-when-high-on-weed-lsd-and-caffeine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spider's web patterns change on drugs
        </a>
        . Other stories, like Tusko's, were{" "}
        <a
          href="https://www.theguardian.com/science/2004/feb/26/research.science."
          target="_blank"
          rel="noopener noreferrer"
        >
          utterly horrifying
        </a>{" "}
        (seriously, not safe for life, and also what a terrible news headline
        the author chose). As someone who has never done drugs in their life, I
        think I saw enough to make me continue the tradition. I don't begrudge
        others who use drugs recreationally, I just don't enjoy anything that is
        mind altering. I don't even like to get drunk, feeling like you can't
        control your own thoughts, or your speech, or your motor skills is
        honestly a pretty horrible experience for me. With that said, I do like
        to drink beer, wine and scotch, it just takes quite a few drinks to even
        feel anything because I am a big guy.
      </p>
      <p>
        The last thing I want to say about today is that I really enjoyed Modern
        Family. Even though the show had some less enjoyable episodes towards
        the end, there were still a lot of laughs, and wow, 250 episodes of TV
        in 11 seasons. That writer room was something else. I can definitely see
        myself going back and rewatching the show, but not for a little while,
        at least. I don't know what my wife and I will pick next, there are a
        lot of amazing shows out there.
      </p>
    </div>
  );
}

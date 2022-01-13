import logStyles from "../../styles/log.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: logStyles,
    },
  ];
}

export default function L2021_01_12() {
  return (
    <div className="log">
      <h1>Daily Log</h1>
      <h2>Jan 12, 2022</h2>
      <ul>
        <li>
          Read two more chapters of{" "}
          <a
            href="https://www.audible.com/pd/Why-We-Sleep-Audiobook/B0752ZQR33"
            target="_blank"
            rel="noopener noreferrer"
          >
            Why We Sleep
          </a>
          .
        </li>
        <li>Peach learned Chill (lay down).</li>
        <li>
          Watched{" "}
          <a
            href="https://movies.disney.com/encanto"
            target="_blank"
            rel="noopener noreferer"
          >
            Encanto
          </a>
          .
        </li>
        <li>
          Cooked a Skillet Burrito Bowl recipe from America's Test Kitchen's{" "}
          <a
            href="https://shop.americastestkitchen.com/dinner-illustrated.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dinner illustrated
          </a>
          , delicious!
        </li>
      </ul>
      <p>
        Peach is very smart and picks things up really quick, but lay down has
        been one of the harder things to teach her. But today we had a
        breakthrough and she started to get it! By the end she was repeating the
        behavior every time! We are using "Chill" because we started teaching
        "down" to get off of people and counters. In hindsight, "off" may have
        been a better word. But dogs don't know the difference, they simply need
        a distinct marker that they can understand and is distinguishable from
        other words. We have done really well with a calm and slightly prolonged
        "goooood" as the marker for a desired behavior. She licks her lips every
        time she hears it.
      </p>
      <p>
        Encanto was a lot of fun. I don't want to spoil anything so I won't talk
        too much about it here. I really enjoyed the songs, though if I have one
        complaint, I was not a fan of the lead character's singing voice.
      </p>
      <p>
        I am not a very good cook, but I am trying to get better. My friend who
        is an amazing cook gave me this book as a recommendation and it has
        helped a lot. I have no intuition when it comes to ingredients or
        flavors, if the best I will ever do is following a recipe that is ok, I
        just want to be able to make something for my family that they can
        enjoy.
      </p>
    </div>
  );
}

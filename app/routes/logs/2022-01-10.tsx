export function Log20220110() {
  return (
    <div className="prose prose-slate prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <h1>Daily Log</h1>
      <h2>Jan 10, 2022</h2>
      <ul>
        <li>
          Started 5 week fitness challenge! Did a 30 min strength workout and an
          hour kickboxing cardio workout.
        </li>
        <li>
          Finished{" "}
          <a
            href="https://www.amazon.com/Crucial-Conversations-Talking-Stakes-Second/dp/1469266822"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crucial Conversations
          </a>
          .
        </li>
        <li>
          {`Debugged an esoteric timing issue at work doing a Jest 26 => 27 upgrade.`}
        </li>
      </ul>
      <p>
        Busy day! Ended up doing 90 minutes of workouts today. I am wiped. And
        super dehydrated! Downing a protein shake now after finishing an hour
        long kickboxing workout. I think I am going to sleep well tonight. I was
        able to finish Crucial Conversations today while driving to and picking
        up Peach from doggy daycare.
      </p>
      <p>
        Had one of those fun JS dependency hell days doing a Jest 26 to 27
        upgrade. They have switched to a{" "}
        <a
          href="https://jestjs.io/blog/2021/05/25/jest-27#flipping-defaults"
          target="_blank"
          rel="noopener noreferrer"
        >
          new timing API
        </a>
        :
        <pre>
          <code>jest.useFakeTimers("modern")</code>
        </pre>
        and it was causing an issue in one of Sirona's tests. The real issue is
        that the component is not easily testable, but it is a form of{" "}
        <em>prudent tech debt</em>. Prudent tech debt
        <a
          href="https://martinfowler.com/bliki/TechnicalDebtQuadrant.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <sup>[1]</sup>
        </a>{" "}
        is debt that you may not want to address because the code <em>works</em>
        . It has been running in production for a long time, it has had months
        or years of bug fixes for edge cases that customers have reported.
        Replacing this tech debt is risky, because the new code, while it may be
        more testable and maintainable, has not seen the same rigor applied to
        it. Therefore it is prudent to keep some debt around until that debt is
        preventing you from extending features in your system for your users or
        it finally is costing too much. In this case, it cost a single developer
        half a day banging against it to make it work with the updated library.
        A rewrite would have taken at least a week. At least this time, it was
        prudent debt to keep.
      </p>
    </div>
  );
}

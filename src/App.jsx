import React, { useState, useEffect } from "react";
import { Section } from "./components/Section/Section.jsx";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions.jsx";
import { Statistics } from "./components/Statistics/Statistics.jsx";
import { GlobalStyles } from "./GlobalStyles.js";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState("0%");

  const countTotalFeedback = (event) => {
    const key = event.target.textContent.toLowerCase();
    if (key === "good") setGood((prev) => prev + 1);
    if (key === "neutral") setNeutral((prev) => prev + 1);
    if (key === "bad") setBad((prev) => prev + 1);
  };

  useEffect(() => {
    const totalFeedback = good + neutral + bad;
    setTotal(totalFeedback);

    const positive = totalFeedback > 0 ? `${Math.round((good * 100) / totalFeedback)}%` : "0%";
    setPositivePercentage(positive);
  }, [good, neutral, bad]);

  return (
    <>
      <GlobalStyles />
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={["Good", "Neutral", "Bad"]}
          onLeaveFeedback={countTotalFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </>
  );
};

export default App;

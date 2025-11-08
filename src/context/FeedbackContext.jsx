import { createContext, useState, useEffect } from "react";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
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

    const positive =
      totalFeedback > 0 ? `${Math.round((good * 100) / totalFeedback)}%` : "0%";
    setPositivePercentage(positive);
  }, [good, neutral, bad]);

  return (
    <FeedbackContext.Provider
      value={{
        good,
        neutral,
        bad,
        total,
        positivePercentage,
        countTotalFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

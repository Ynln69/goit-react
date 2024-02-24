import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

const getSavedClicks = () => {
  const savedClicks = window.localStorage.getItem("saved-feedback");
  return savedClicks !== null
    ? JSON.parse(savedClicks)
    : { good: 0, neutral: 0, bad: 0 };
};

const App = () => {
  const [clicks, setClicks] = useState(getSavedClicks());

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const resetFeedBack = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );
  const isFeedback = totalFeedback > 0;

  return (
    <div style={{ textAlign: "center" }}>
      <Description />
      <Options
        onChange={updateFeedback}
        onReset={resetFeedBack}
        isReset={totalFeedback}
      />
      {isFeedback ? (
        <Feedback
          feedbackType={clicks}
          total={totalFeedback}
          percent={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;

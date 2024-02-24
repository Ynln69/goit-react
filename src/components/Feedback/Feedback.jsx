const Feedback = ({ feedbackType: { good, neutral, bad }, total, percent }) => {
  return (
    <ul>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total: {total}</li>
      <li>positive: {percent} %</li>
    </ul>
  );
};

export default Feedback;

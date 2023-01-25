export const App = () => {
  return (
    <div>
      <Notification message="There is no feedback"></Notification>
      <Section title="">
        <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions>
      </Section>

      <Section title="">
              <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics>
    </Section>
    </div>
  );
};

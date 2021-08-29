function FeedbackForm() {
  return (
    <form name="feedback" data-netlify="true" action="/thankyou">
      <fieldset>
        <legend>Feedback Form</legend>
        <label htmlFor="emailId">Name</label>
        <input id="emailId" type="email" name="emailId" />
        <label htmlFor="feedback">Feedback</label>
        <textarea id="feedback" />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default FeedbackForm;

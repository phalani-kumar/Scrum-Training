function Message({ text, error }) {
  return (
    <div className={error ? "error-message" : "loading-message"}>
      <h1>{text}</h1>
    </div>
  );
}

export default Message;
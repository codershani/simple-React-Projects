function CurrentTime() {
  let dateAndTime = new Date();
  return (
    <p className="lead">
      This s the current time: {dateAndTime.toLocaleDateString()} -{" "}
      {dateAndTime.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;

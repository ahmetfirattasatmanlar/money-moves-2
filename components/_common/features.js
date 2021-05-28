export default function FeaturesContainer(props) {
  const { cards, title } = props;

  const featureCard = (text, index) => {
    const savings = text === "Saving Goals";
    const images = ["/savings.svg", "/budgets.svg", "/subscriptions.svg"];
    return (
      <div
        className="d-flex justify-content-between align-items-center m-2"
        style={{ width: "90%", MinHeight: "25%" }}
      >
        <img src={images[index]} alt="" />
        <p className="m-0 ml-2 text-start w-75">
          <b>{text}</b>
        </p>
        <button type="button" className="btn">
          <img src={`${savings ? "/start.svg" : "/caret.svg"}`} alt="" />
        </button>
      </div>
    );
  };

  return (
    <div
      className="shadow-lg mt-4 p-2 d-flex flex-column align-items-center"
      style={{ width: "90%", minHeight: "15vh", borderRadius: "2rem" }}
    >
      {title && (
        <h2 className="w-100 p-3">
          <b>{title}</b>
        </h2>
      )}
      {cards.map((card, index) => {
        return featureCard(card, index);
      })}
    </div>
  );
}

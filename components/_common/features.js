export default function FeaturesContainer(props) {
  const { cards, title } = props;

  const featureCard = (text, index) => {
    const savings = text === "Saving Goals";
    const images = ["/savings.svg", "/budgets.svg", "/subscriptions.svg"];
    return (
      <div className="d-flex align-items-center p-3">
        <img src={images[index]} alt="" className="mr-3" />
        <strong>{text}</strong>
        <img src={`${savings ? "/start.svg" : "/caret.svg"}`} alt="" className="ml-auto" />
      </div>
    );
  };

  return (
    <div className="card mb-2 border-0 shadow-sm rounded-lg">
      {title ? <div className="card-header bg-transparent pb-0 border-0"><h2 className="h6 font-weight-bold">{title}</h2></div> : undefined}
      {cards.map((card, index) => {
        return featureCard(card, index);
      })}
    </div>
  );
}

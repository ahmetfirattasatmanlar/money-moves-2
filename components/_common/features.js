export default function FeaturesContainer({ cards, title }) {

  return (
    <div className="card mb-2 border-0 shadow-sm rounded-lg">
      {title ? <div className="card-header bg-transparent pb-0 border-0"><h2 className="h5 font-weight-bold">{title}</h2></div> : undefined}

      {cards.map((card, index) => {
        // console.log(card)
        const images = ["/savings.svg", "/budgets.svg", "/subscriptions.svg"];
        const savings = card === "Saving Goals";

        return <div className="d-flex align-items-center p-3" key={`feature-${index}`}>
          <img src={images[index]} alt="" className="mr-3" />
          <strong>{card}</strong>
          <img src={`${savings ? "/start.svg" : "/caret.svg"}`} alt="" className="ml-auto" />
        </div>
      })}
    </div >
  );
}

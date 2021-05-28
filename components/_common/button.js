import Link from "next/link";

export default function Button(props) {
  const { text, click, bg, transfer } = props;
  console.log(transfer);

  const Btn = () => {
    return (
      <button
        type="button"
        className={`btn btn-primary ${bg}`}
        onClick={click}
        style={{ borderRadius: "2rem", width: "70%" }}
      >
        {text}
      </button>
    );
  };

  const Home = () => {
    return (
      <Link href="/home">
        <button
          type="button"
          className={`btn ${bg} border-light text-white`}
          onClick={click}
          style={{ borderRadius: "2rem", width: "70%" }}
        >
          {text}
        </button>
      </Link>
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        height: "100px",
        maxWidth: "25rem",
      }}
      className="w-100 bg-transparent d-flex align-items-center justify-content-around"
    >
      {!transfer ? <Btn /> : <Home />}
    </div>
  );
}

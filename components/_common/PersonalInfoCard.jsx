export default function PersonalInfoCard(props) {
  const { title, options } = props;

  let generetaOptions = (text) => {
    return (
      <div className="d-flex justify-content-start align-items-center w-75">
        <input className="mr-4" type="radio" name="option" id="option" />
        <label className="m-0" htmlFor="option">
          {text}
        </label>
      </div>
    );
  };

  return (
    <div className="d-flex flex-column w-75 m">
      <h2 style={{ fontSize: "1.5rem" }}>{title}</h2>
      <form action="">
        {options.map((option) => {
          return generetaOptions(option);
        })}
      </form>
    </div>
  );
}

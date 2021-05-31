export default function PersonalInfoCard({ title = "", options = [] }) {


  return (
    <div className="w-100 mb-2">
      <p className="font-weight-bold mb-2">{title}</p>
      <form action="">
        {options.map((option, index) => <div className="d-flex justify-content-start align-items-center w-75" key={`option-${index}`}>
          <input className="mr-2" type="radio" name={option} id={option} />
          <label className="m-0 font-weight-normal h6 py-2 text-muted" htmlFor={option}>
            {option}
          </label>
        </div>)}
      </form>
    </div>
  );
}

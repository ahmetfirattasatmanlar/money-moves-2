export default function LoanDropdown({ text = "" }) {
  return (
    <div className="card pt-2 w-100  mb-4 rounded">
      <label htmlFor="term" className="px-3 mb-0 font-weight-normal">{text}</label>
      <select name="term" id="term" className="form-control">
        <option value="1">1 Year</option>
        <option value="1">2 Year</option>
        <option value="1">3 Year</option>
        <option value="1">4 Year</option>
      </select>
    </div>
  );
}

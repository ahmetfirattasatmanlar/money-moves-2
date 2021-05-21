export default function LoanDropdown(props) {
  const { text } = props;
  return (
    <div class="dropdown m-3 bg-light w-50">
      <button
        class="btn btn-secondary dropdown-toggle w-100 bg-light"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{ textAlign: "center" }}
      >
        {text}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">
          Action
        </a>
        <a class="dropdown-item" href="#">
          Another action
        </a>
        <a class="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
  );
}

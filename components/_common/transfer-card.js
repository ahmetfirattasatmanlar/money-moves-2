import { FaChevronDown } from 'react-icons/fa'

export default function TransferCard({ selectable = false }) {
  return (
    <div className="card text-dark text-left rounded-lg">
      <div className="card-body py-2 d-flex align-items-center">
        <img src="/icon-hsbc.svg" alt="..." />
        <div className="d-flex flex-column ml-3">
          <span>HSBC</span>
          <b>**** **** **** 1234</b>
        </div>
        {selectable ? <span className="ml-auto"><FaChevronDown /></span> : undefined}
      </div>
    </div>
  );
}

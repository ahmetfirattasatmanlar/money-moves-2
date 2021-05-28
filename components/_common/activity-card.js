export default function ActivityCard({ src, amount, activityType, date }) {
  return (<>
    {(src && amount && activityType && date) ?
      <div className="px-3 d-flex align-items-centers py-3">
        <img src={src} />
        <div className="ml-3">
          <div className="h6 m-0 font-weight-bold">{activityType}</div>
          <small className="text-muted">{date}</small>
        </div>
        <span className="ml-auto">-${amount}</span>
      </div> : undefined
    }
  </>);
}

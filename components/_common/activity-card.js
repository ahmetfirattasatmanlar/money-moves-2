export default function ActivityCard({ src, amount, activityType, date }) {
  return (<>
    {(src && amount && activityType && date) ?
      <div>
        <img src={src} />
        {activityType}
        {date}
        -${amount}
      </div> : undefined
    }
  </>);
}

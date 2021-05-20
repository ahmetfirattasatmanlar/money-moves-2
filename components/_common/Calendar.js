const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export default function ActivityCalendar() {
  return (
    <ul
      className="d-flex"
      style={{ listStyle: "none", top: "200px", position: "absolute" }}
    >
      {months.map((month) => {
        return (
          <li style={{ margin: "5px", fontSize: "1.5rem", overflow: "hidden" }}>
            {month}
          </li>
        );
      })}
    </ul>
  );
}

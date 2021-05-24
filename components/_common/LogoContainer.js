import Link from "next/link";

export default function LogoContainer(props) {
  const { icon, justify, element } = props;
  return (
    <div
      style={{ height: "5rem" }}
      className={`d-flex justify-content-${
        justify ? justify : "center"
      } align-items-center`}
    >
      {element && element}
      <img src="/logoWhite.svg" />
      {icon && <img src={`/${icon}.svg`} />}
    </div>
  );
}

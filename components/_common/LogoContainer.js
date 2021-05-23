export default function LogoContainer(props) {
  const { icon, justify } = props;
  return (
    <div
      style={{ height: "5rem" }}
      className={`d-flex justify-content-${
        justify ? justify : "center"
      } align-items-center border`}
    >
      <img src="/logoWhite.svg" />
      {icon && <img src={`/${icon}.svg`} />}
    </div>
  );
}

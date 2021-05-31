import Nav from "./nav";

export default function AppWrapper({ nav = false, children, dark = false }) {
  return (
    <div className={`d-flex flex-column h-100 ${dark ? 'bg-gradient-dark pb-0' : ''}`} >
      {children}
      {nav ? <Nav /> : undefined}
    </div>
  );
}

import Nav from "./nav";

export default function AppWrapper({ nav = false, children, dark = false }) {
  return (
    <div className={`d-flex flex-column justify-content-between ${dark ? 'bg-gradient-dark h-100 pb-0' : ''}`} style={{ paddingBottom: '5rem' }}>
      {children}
      {nav ? <Nav /> : undefined}
    </div>
  );
}

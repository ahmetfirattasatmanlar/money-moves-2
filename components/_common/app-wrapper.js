import Nav from './nav'

export default function AppWrapper({ children }) {
  return (
    <div>
      {children}
      <Nav />
    </div>
  )
}

import Nav from './nav'

export default function AppWrapper({ children }) {
  return (
    <div style={{width: "100vw", background: "linear-gradient(to right, #2b88d8, #001f78)", height: "100vh"}}>
      {children}
      <Nav />
    </div>
  )
}

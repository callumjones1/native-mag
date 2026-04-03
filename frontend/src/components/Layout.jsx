import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import './Layout.css'

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© 2026 Native Mag. All rights reserved.</p>
      </footer>
    </div>
  )
}

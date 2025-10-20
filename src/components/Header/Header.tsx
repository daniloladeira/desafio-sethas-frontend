import './Header.css'
import { Search, Bell, UserCircle2Icon } from 'lucide-react'

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-text">
        <h1>Dashboard</h1>
      </div>

      <div className="header-actions">
        <Search size={28} className='header-search-icon'/>
        <Bell size={28} className='header-bell-icon'/>
        <UserCircle2Icon size={32} className='header-user-icon'/>
      </div>

    </header>
  )
}

export default Header

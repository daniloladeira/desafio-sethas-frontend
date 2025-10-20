import logo from '../../assets/logo.svg';
import RNLogo from '../../assets/logo-rn.svg';
import { LucideHome, Table, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const items = [
    {
      routerLink: '/',
      label: 'Dashboard',
      icon: <LucideHome />,
    },
    {
      routerLink: '/tabela',
      label: 'Tabela',
      icon: <Table />,
    },
  ];

  return (
    <div>
      <aside className="sidenav">
        <header className="logo-container">
          <img src={logo} alt="Logo" />
          <button className="btn-close">
            <ArrowLeft />
          </button>
        </header>

        <div className='sidenav-content'>
          <nav className="sidenav-nav">
            {items.map((item) => (
              <li key={item.label} className="sidenav-nav-item">
                <Link className="sidenav-nav-link" to={item.routerLink}>
                  <span className="sidenav-link-icon">{item.icon}</span>
                  <span className="sidenav-link-text">{item.label}</span>
                </Link>
              </li>
            ))}
          </nav>

          <div>
            <img src={RNLogo} alt="Logo RN" className="sidenav-rn-logo" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

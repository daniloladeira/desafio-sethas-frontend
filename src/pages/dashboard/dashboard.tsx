import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <Sidebar />
      <div className='main-content'>
        <Header />
        <div className='dashboard-content'>
          <div className='content-wrapper'>
            {/* Conteúdo do dashboard aqui */}
            <h1>Conteúdo da Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

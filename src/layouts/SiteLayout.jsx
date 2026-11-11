import { Outlet } from 'react-router';
import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Footer from '../components/Footer.jsx';

export default function SiteLayout() {
  return (
    <div className="app-shell">
      <Header />
      <div className="content-grid">
        <Sidebar />
        {/* Outlet indica onde a página ativa aparece. */}
        <main className="page"><Outlet /></main>
      </div>
      <Footer />
    </div>
  );
}